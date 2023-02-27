import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InvestorEntity } from '../entity/investor.entity';
import { InvestorEntityRepository } from '../repository/investorEntityRepository';
import { InvestmentEntity } from '../entity/investment.entity';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class InvestorService {
  constructor(
    @InjectRepository(InvestorEntity)
    private investorRepository: InvestorEntityRepository,
  ) {}

  async create(investor: InvestorEntity): Promise<InvestorEntity> {
    return this.investorRepository.save(
      this.investorRepository.create(investor),
    );
  }

  async findById(id: number): Promise<InvestorEntity | null> {
    return this.investorRepository
      .createQueryBuilder()
      .leftJoinAndSelect(
        UserEntity,
        '_creator',
        '_creator.id=Investor.created_by',
      )
      .addSelect(
        'CONCAT(_creator.first_name, " ", _creator.last_name)',
        'creator',
      )
      .where('Investor.id = :id', { id })
      .getOne();
  }
  async findAll(): Promise<InvestorEntity[]> {
    return this.investorRepository
      .createQueryBuilder('Investor')
      .leftJoinAndSelect(
        UserEntity,
        '_creator',
        '_creator.id=Investor.created_by',
      )
      .addSelect(
        'CONCAT(_creator.first_name, " ", _creator.last_name)',
        'creator',
      )
      .getMany();
  }

  async update(id: string, data: any): Promise<any> {
    return this.investorRepository
      .createQueryBuilder()
      .update()
      .set(data)
      .where('id = :id', { id })
      .execute();
  }

  async delete(id: string): Promise<any> {
    return this.investorRepository
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
