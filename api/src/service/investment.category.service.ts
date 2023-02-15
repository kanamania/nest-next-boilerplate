import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InvestmentCategoryEntity } from '../entity/investment.category.entity';
import { InvestmentCategoryEntityRepository } from '../repository/investmentCategoryEntityRepository';
@Injectable()
export class InvestmentCategoryService {
  constructor(
    @InjectRepository(InvestmentCategoryEntity)
    private investmentCategoryRepository: InvestmentCategoryEntityRepository,
  ) {}

  async create(
    investmentCategory: InvestmentCategoryEntity,
  ): Promise<InvestmentCategoryEntity> {
    return this.investmentCategoryRepository.save(
      this.investmentCategoryRepository.create(investmentCategory),
    );
  }
  async findById(id: number): Promise<InvestmentCategoryEntity | null> {
    return this.investmentCategoryRepository.findOneBy({ id });
  }
  async findAll(): Promise<InvestmentCategoryEntity[]> {
    return this.investmentCategoryRepository.find();
  }
  async update(id: string, data: any): Promise<any> {
    return this.investmentCategoryRepository
      .createQueryBuilder()
      .update()
      .set(data)
      .where('id = :id', { id })
      .execute();
  }
  async delete(id: string): Promise<any> {
    return this.investmentCategoryRepository
      .createQueryBuilder()
      .update()
      .set({
        deleted_by: null,
        deleted_at: new Date(),
      })
      .where('id = :id', { id })
      .execute();
  }
}
