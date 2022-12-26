import RabbitMQClient from "../utils/RabbitMQClient"
import dotenv from 'dotenv';

dotenv.config();

const amqpURL = `amqp://${process.env.RABBIT_USER}:${process.env.RABBIT_PASSWORD}@${process.env.RABBIT_URL}/${process.env.RABBIT_VIRTUAL_HOST}`


class Application {
  private rabbitClient: RabbitMQClient

  constructor() {
    this.rabbitClient = new RabbitMQClient(amqpURL, process.env.RABBIT_QUEUE);
    this.startConsumer(); 
  }

  startConsumer() {
    this.rabbitClient.start((message) => {
      console.log(message)
    })
  }
}

new Application()
