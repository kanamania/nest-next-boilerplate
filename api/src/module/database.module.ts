import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { devConfig } from '../config/database.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({
        type: devConfig.type,
        host: devConfig.host,
        port: devConfig.port,
        username: devConfig.username,
        password: devConfig.password,
        database: devConfig.database,
        entities: devConfig.entities,
        synchronize: devConfig.synchronize,
      }),
    }),
  ],
})
class DatabaseModule {}

export default DatabaseModule;
