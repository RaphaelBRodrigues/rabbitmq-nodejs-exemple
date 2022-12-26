import { Router } from 'express';
import { rabbitClient } from '.';

const routes = Router();

routes.post('/sendToQueue', async (req, res) => {
  const {
    name, document
  } = req.body;

  const result = await rabbitClient.publishInExchange({
    name,
    document
  });

  res.json({
    ok: result,
    username: name
  })
})

export default routes;