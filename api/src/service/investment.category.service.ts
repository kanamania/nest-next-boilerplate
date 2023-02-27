import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InvestmentCategoryEntity } from '../entity/investment.category.entity';
import { InvestmentCategoryEntityRepository } from '../repository/investmentCategoryEntityRepository';
import { InvestmentEntity } from '../entity/investment.entity';
import { UserEntity } from '../entity/user.entity';
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
    return this.investmentCategoryRepository
      .createQueryBuilder('InvestmentCategory')
      .leftJoinAndSelect(
        UserEntity,
        '_creator',
        '_creator.id=InvestmentCategory.created_by',
      )
      .addSelect(
        'CONCAT(_creator.first_name, " ", _creator.last_name)',
        'creator',
      )
      .where('InvestmentCategory.id = :id', { id })
      .getOne();
  }
  async findAll(): Promise<InvestmentCategoryEntity[]> {
    return this.investmentCategoryRepository
      .createQueryBuilder('InvestmentCategory')
      .leftJoinAndSelect(
        UserEntity,
        '_creator',
        '_creator.id=InvestmentCategory.created_by',
      )
      .addSelect(
        'CONCAT(_creator.first_name, " ", _creator.last_name)',
        'creator',
      )
      .getMany();
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
