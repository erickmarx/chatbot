import { configDotenv } from 'dotenv';

configDotenv();

export const CONFIG = {
  OPENAI: {
    MODEL: 'gpt-3.5-turbo',
    API_KEY: process.env.OPENAI_API_KEY,
    TEMPERATURE: 0.5,
    VERBOSE: false,
  },
  GOOGLE: {
    PROJECT_ID: process.env.GOOGLE_PROJECT_ID,
    FIRESTORE: {
      DATABASE_ID: process.env.FIRESTORE_DATABASE_ID,
      PRIVATE_KEY: process.env.FIRESTORE_PRIVATE_KEY,
      CLIENT_EMAIL: process.env.FIRESTORE_CLIENT_EMAIL,
    },
  },
};
