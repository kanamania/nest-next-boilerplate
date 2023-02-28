import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationEntity } from '../entity/location.entity';
import { LocationService } from '../service/location.service';
import { LocationController } from '../controller/location.controller';
import { LocationEntityRepository } from '../repository/locationEntityRepository';
import { FileModule } from './file.module';
@Module({
  imports: [TypeOrmModule.forFeature([LocationEntity]), FileModule],
  controllers: [LocationController],
  providers: [LocationService, LocationEntityRepository],
  exports: [LocationService],
})
export class LocationModule {}
