import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './module/user.module';
import { connectionOptions } from '../ormconfig';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocationModule } from './module/location.module';
import { InvestmentModule } from './module/investment.module';
import { InvestmentAreaModule } from './module/investment.area.module';
import { InvestmentCategoryModule } from './module/investment.category.module';
import { MulterModule } from '@nestjs/platform-express';
import { FileModule } from './module/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import './polyfill';
import { configuration } from './config/configuration';
import { AllExceptionsFilter } from './utils/all-exceptions.filter';
const IMPORTED_MODULES = [
  AuthModule,
  FileModule,
  UserModule,
  LocationModule,
  InvestmentModule,
  InvestmentAreaModule,
  InvestmentCategoryModule,
];
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'files'),
    }),
    MulterModule.register({
      dest: './files',
    }),
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRoot(connectionOptions),
    PassportModule,
    ...IMPORTED_MODULES,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
