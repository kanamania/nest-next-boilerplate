import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestmentAreaEntity } from '../entity/investment.area.entity';
import { InvestmentAreaService } from '../service/investment.area.service';
import { InvestmentAreaController } from '../controller/investment.area.controller';
import { InvestmentAreaEntityRepository } from '../repository/investmentAreaEntityRepository';
import { FileModule } from './file.module';
@Module({
  imports: [TypeOrmModule.forFeature([InvestmentAreaEntity]), FileModule],
  controllers: [InvestmentAreaController],
  providers: [InvestmentAreaService, InvestmentAreaEntityRepository],
  exports: [InvestmentAreaService],
})
export class InvestmentAreaModule {}
