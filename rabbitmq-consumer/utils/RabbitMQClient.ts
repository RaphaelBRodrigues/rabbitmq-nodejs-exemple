import { Connection, Channel, connect } from 'amqplib';

type ConsumerCallback = (message: Record<any, any>) => void

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
      throw new Error("Invalid Params")
    }

    this.queueName = queueName;
    this.uri = uri;
  }

  async start(callback: ConsumerCallback, queueName?: string) {
    this.queueName = queueName || this.queueName;

    await this.stabilishConnection();
    await this.startListener(callback);
  }

  private async stabilishConnection() {
    this.connection = await connect(this.uri);
    this.channel = await this.connection.createChannel();


    const queue = await this.channel.assertQueue(this.queueName);

    return queue;
  }

  private async startListener(callback: ConsumerCallback) {
    return this.channel.consume(this.queueName, (message) => {
      if (!!message) {
        const parsedContent = JSON.parse(message.content.toString());  
        callback(parsedContent);

        this.channel.ack(message);
      }
    })
  }
}

export default RabbitMQClient;