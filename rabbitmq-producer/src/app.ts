import express from 'express';
import RabbitMQClient from './utils/RabbitMQClient';
import dotenv from 'dotenv';

dotenv.config()
const app = express();

const amqpURL = `amqp://${process.env.RABBIT_USER}:${process.env.RABBIT_PASSWORD}@${process.env.RABBIT_URL}/${process.env.RABBIT_VIRTUAL_HOST}`

app.use(express.json());


app.post('/sendToQueue', async (req, res) => {
  const {
    name, document
  } = req.body;

  const rabbitClient = new RabbitMQClient(amqpURL, process.env.RABBIT_QUEUE);
  await rabbitClient.start();

  const result = await rabbitClient.publishMessage({
    name,
    document
  });

  res.json({
    ok: result,
    username: name
  })
})

app.listen(3000, () => {
  console.log("App Running")
})