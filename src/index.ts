import * as dotenv from 'dotenv';
dotenv.config();

import { Server } from 'net';

import { createServer } from './server';
import Logger from './utils/logger';
import AppConfig from './config/appConfig';

const PORT = AppConfig.app.port;

function startServer(): Server {
  const app = createServer();

  return app.listen(PORT, () => {
    Logger.debug(
      `API RESTMockServer is starting in ${AppConfig.app.nodeEnv} environment.`,
    );
    Logger.debug(`✅ Server is running on http://localhost:${PORT}`);
  });
}

startServer();