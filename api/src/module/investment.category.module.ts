import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestmentCategoryEntity } from '../entity/investment.category.entity';
import { InvestmentCategoryService } from '../service/investment.category.service';
import { InvestmentCategoryController } from '../controller/investment.category.controller';
import { InvestmentCategoryEntityRepository } from '../repository/investmentCategoryEntityRepository';
import { FileModule } from './file.module';
@Module({
  imports: [TypeOrmModule.forFeature([InvestmentCategoryEntity]), FileModule],
  controllers: [InvestmentCategoryController],
  providers: [InvestmentCategoryService, InvestmentCategoryEntityRepository],
  exports: [InvestmentCategoryService],
})
export class InvestmentCategoryModule {}
