import { ConnectionOptions } from 'typeorm';
import { config } from 'dotenv';
import { devConfig } from './src/config/database.config';

config();

export const connectionOptions: ConnectionOptions = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  type: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: devConfig.entities,
  synchronize: devConfig.synchronize,
  migrations: devConfig.migrations,
};
