const NODE_ENV = process.env.NODE_ENV || 'development';

const AppConfig = {
  app: {
    nodeEnv: NODE_ENV,
    port: parseInt(<string>process.env.PORT, 10) || 8080,
    isDevelopment: NODE_ENV === 'development',
  }
};

export default Object.freeze(AppConfig);