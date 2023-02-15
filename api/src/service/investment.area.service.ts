import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InvestmentAreaEntity } from '../entity/investment.area.entity';
import { InvestmentAreaEntityRepository } from '../repository/investmentAreaEntityRepository';
@Injectable()
export class InvestmentAreaService {
  constructor(
    @InjectRepository(InvestmentAreaEntity)
    private investmentAreaRepository: InvestmentAreaEntityRepository,
  ) {}

  async create(
    investmentArea: InvestmentAreaEntity,
  ): Promise<InvestmentAreaEntity> {
    return this.investmentAreaRepository.save(
      this.investmentAreaRepository.create(investmentArea),
    );
  }
  async findById(id: number): Promise<InvestmentAreaEntity | null> {
    return this.investmentAreaRepository.findOneBy({ id });
  }
  async findAll(): Promise<InvestmentAreaEntity[]> {
    return this.investmentAreaRepository.find();
  }
  async update(id: string, data: any): Promise<any> {
    return this.investmentAreaRepository
      .createQueryBuilder()
      .update()
      .set(data)
      .where('id = :id', { id })
      .execute();
  }
  async delete(id: string): Promise<any> {
    return this.investmentAreaRepository
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
