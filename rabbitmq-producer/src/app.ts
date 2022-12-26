import express, { Application } from 'express';
import RabbitMQClient from './utils/RabbitMQClient';
import routes from './routes';

class App {
  private express: Application;

  constructor(private rabbitClient: RabbitMQClient) {
    this.express = express();
  }

  async start() {
    await this.startRabbitConnection();
    this.setupMiddlewares();
    this.setupRoutes();
    this.listen();
  }

  private async startRabbitConnection() {
    await this.rabbitClient.start();
  }

  private setupRoutes() {
    this.express.use(routes);
  }

  private setupMiddlewares() {
    this.express.use(express.json());
  }

  listen() {
    this.express.listen(3000, () => {
      console.log("App Running")
    })
  }
}

export default App;