import express from 'express';
import cors from 'cors';
import type { Application } from 'express';
import * as routes from './routes';
import { db } from './utils/firestore-helpers';

import MorganMiddleware from './middlewares/morgan';

const seedRoute = new routes.SeedRoute(db);

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

  app.use('/seed', seedRoute.createRouter());

  return app;
}
