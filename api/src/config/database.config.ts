import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export const devConfig: MysqlConnectionOptions = {
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
  entities: ['dist/src/entity/*.entity{.ts,.js}'],
  migrations: ['dist/src/migration/*{.ts,.js}'],
  synchronize: true,
  logging: true,
};
