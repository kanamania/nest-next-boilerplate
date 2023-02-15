import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InvestmentEntity } from '../entity/investment.entity';
import { InvestmentEntityRepository } from '../repository/investmentEntityRepository';
import { Encrypt } from '../utils/encrypt';
@Injectable()
export class InvestmentService {
  constructor(
    @InjectRepository(InvestmentEntity)
    private investmentRepository: InvestmentEntityRepository,
  ) {}

  async create(investment: InvestmentEntity): Promise<InvestmentEntity> {
    return this.investmentRepository.save(
      this.investmentRepository.create(investment),
    );
  }
  async findById(id: number): Promise<InvestmentEntity | null> {
    return this.investmentRepository.findOneBy({ id });
  }
  async findAll(): Promise<InvestmentEntity[]> {
    return this.investmentRepository.find();
  }
  async update(id: string, data: any): Promise<any> {
    return this.investmentRepository
      .createQueryBuilder()
      .update()
      .set(data)
      .where('id = :id', { id })
      .execute();
  }
  async delete(id: string): Promise<any> {
    return this.investmentRepository
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
