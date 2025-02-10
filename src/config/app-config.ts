const NODE_ENV = process.env.NODE_ENV || 'development';

const AppConfig = {
  app: {
    nodeEnv: NODE_ENV,
    port: parseInt(<string>process.env.PORT, 10) || 8080,
    isDevelopment: NODE_ENV === 'development',
  },
  db: {
    firestore: {
      projectId:  process.env.GCP_PROJECT_ID,
      clientEmail:  process.env.GCP_SA_CLIENT_EMAIL,
      privateKey:  process.env.GCP_SA_PRIVATE_KEY,
      databaseId:  process.env.FIRESTORE_DATABASE_ID,
    }
  }
};

export default Object.freeze(AppConfig);
