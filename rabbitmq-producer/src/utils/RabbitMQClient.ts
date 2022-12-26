import { Connection, Channel, connect } from 'amqplib';

class RabbitMQClient {
  private connection: Connection;
  private channel: Channel;
  private uri: string;

  constructor(uri: string | undefined) {
    if (!uri) {
      throw new Error("Invalid URI")
    }

    this.uri = uri;
  }

  async start(): Promise<void> {
    this.connection = await connect(this.uri);
    this.channel = await this.connection.createChannel();
    await this.channel.assertQueue("Teste");
  }

  async publishMessage(data: Record<any, any>) {
    const jsonMessage = JSON.stringify(data)
    const bufferedMessage = Buffer.from(jsonMessage);

    return this.channel.sendToQueue("Teste", bufferedMessage, {
      
    })
  }
}

export default RabbitMQClient;