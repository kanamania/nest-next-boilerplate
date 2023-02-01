import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './module/user.module';
import { connectionOptions } from '../ormconfig';
import { ConfigModule } from '@nestjs/config';

const IMPORTED_MODULES = [UserModule];

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(connectionOptions),
    ...IMPORTED_MODULES,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
