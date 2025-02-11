import express from 'express';
import cors from 'cors';
import type { Application } from 'express';

import { db } from './utils/firestore-helpers';
import { initializeRoutes } from './initialize-routes';

import MorganMiddleware from './middlewares/morgan';

export function createServer(): Application {
  const app = express();
  const { seedRoute } = initializeRoutes(db);

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use(cors({
    origin: '*',
  }));

  app.use(MorganMiddleware);

  app.get('/', (req, res) => {
    res.json({ message: '🚀 RESTMockServer is running!' });
  });

  app.use('/seed', seedRoute.createRouter());

  return app;
}
