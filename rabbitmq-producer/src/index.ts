import dotenv from 'dotenv';
dotenv.config();

import makeApp from "./makeApp";

const {
  app,
  rabbitClient
} = makeApp();

app.listen();

export { rabbitClient };