import { Connection, Channel, connect } from 'amqplib';

class RabbitMQClient {
  private connection: Connection;
  private channel: Channel;
  private uri: string;
  private queueName: string;


  constructor(
    uri: string | undefined,
    queueName: string | undefined
  ) {
    if (!uri || !queueName) {
      throw new Error("Invalid URI")
    }

    this.queueName = queueName;
    this.uri = uri;
  }

  async start(queueName?: string): Promise<void> {
    this.connection = await connect(this.uri);
    this.channel = await this.connection.createChannel();

    this.queueName = queueName || this.queueName;

    await this.channel.assertQueue(this.queueName);
  }

  async publishMessage(data: Record<any, any>) {
    const jsonMessage = JSON.stringify(data)
    const bufferedMessage = Buffer.from(jsonMessage);

    return this.channel.sendToQueue(this.queueName, bufferedMessage);
  }
}

export default RabbitMQClient;