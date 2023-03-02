import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestmentEntity } from '../entity/investment.entity';
import { InvestmentService } from '../service/investment.service';
import { InvestmentController } from '../controller/investment.controller';
import { InvestmentEntityRepository } from '../repository/investmentEntityRepository';
import { FileModule } from './file.module';
@Module({
  imports: [TypeOrmModule.forFeature([InvestmentEntity]), FileModule],
  controllers: [InvestmentController],
  providers: [InvestmentService, InvestmentEntityRepository],
  exports: [InvestmentService],
})
export class InvestmentModule {}
