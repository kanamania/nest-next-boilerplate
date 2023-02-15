import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './module/user.module';
import { connectionOptions } from '../ormconfig';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocationModule } from './module/location.module';
import { InvestmentModule } from './module/investment.module';
import { InvestmentAreaModule } from './module/investment.area.module';
import { InvestmentCategoryModule } from './module/investment.category.module';

const IMPORTED_MODULES = [
  AuthModule,
  UserModule,
  LocationModule,
  InvestmentModule,
  InvestmentAreaModule,
  InvestmentCategoryModule,
];
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(connectionOptions),
    PassportModule,
    ...IMPORTED_MODULES,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
