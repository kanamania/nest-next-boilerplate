import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestmentCategoryEntity } from '../entity/investment.category.entity';
import { InvestmentCategoryService } from '../service/investment.category.service';
import { InvestmentCategoryController } from '../controller/investment.category.controller';
import { InvestmentCategoryEntityRepository } from '../repository/investmentCategoryEntityRepository';
@Module({
  imports: [TypeOrmModule.forFeature([InvestmentCategoryEntity])],
  controllers: [InvestmentCategoryController],
  providers: [InvestmentCategoryService, InvestmentCategoryEntityRepository],
  exports: [InvestmentCategoryService],
})
export class InvestmentCategoryModule {}
