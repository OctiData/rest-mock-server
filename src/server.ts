import express from 'express';
import cors from 'cors';
import type { Application } from 'express';

import MorganMiddleware from './middlewares/morgan';

export function createServer(): Application {
  const app = express();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use(cors({
    origin: '*',
  }));

  app.use(MorganMiddleware);

  app.get('/', (req, res) => {
    res.json({ message: '🚀 RESTMockServer is running!' });
  });

  return app;
}