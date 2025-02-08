import morgan from 'morgan';
import { StreamOptions } from 'morgan';

import Logger from '../utils/logger';

// Override the stream method
const stream: StreamOptions = {
  write: (message) => Logger.http(message)
};

const skip = () => {
  const env = process.env.NODE_ENV || 'development';
  return env !== 'development';
};

const MorganMiddleware = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  { stream, skip }
);

export default MorganMiddleware;