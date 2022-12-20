import dotenv from 'dotenv';
import { execSync } from 'child_process';

execSync("ts-node ");

dotenv.config();

export const config = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  SESSION_SECRET: process.env.SESSION_SECRET,
  IMAGES_SERVICE_BASE_URI: process.env.IMAGES_SERVICE_BASE_URI
}
