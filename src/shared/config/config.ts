import { configDotenv } from 'dotenv';

configDotenv();

export const CONFIG = {
  OPENAI: {
    MODEL: 'gpt-3.5-turbo',
    API_KEY: process.env.OPENAI_API_KEY,
    TEMPERATURE: 0.5,
    VERBOSE: false,
  },
};
