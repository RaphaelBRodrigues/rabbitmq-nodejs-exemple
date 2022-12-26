import App from "./app";
import RabbitMQClient from "./utils/RabbitMQClient";

const amqpURL =
  `amqp://${process.env.RABBIT_USER}:${process.env.RABBIT_PASSWORD}@${process.env.RABBIT_URL}/${process.env.RABBIT_VIRTUAL_HOST}`

const queueName = process.env.RABBIT_QUEUE;

function makeApp() {
  const rabbitClient = new RabbitMQClient(amqpURL, queueName);

  const app = new App(rabbitClient);

  return {
    app,
    rabbitClient
  }
}

export default makeApp;