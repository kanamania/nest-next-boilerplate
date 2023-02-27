import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InvestmentAreaEntity } from '../entity/investment.area.entity';
import { InvestmentAreaEntityRepository } from '../repository/investmentAreaEntityRepository';
import { InvestmentEntity } from '../entity/investment.entity';
import { UserEntity } from '../entity/user.entity';
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
    return this.investmentAreaRepository
      .createQueryBuilder('InvestmentArea')
      .leftJoinAndSelect(
        UserEntity,
        '_creator',
        '_creator.id=InvestmentArea.created_by',
      )
      .addSelect(
        'CONCAT(_creator.first_name, " ", _creator.last_name)',
        'creator',
      )
      .where('InvestmentArea.id = :id', { id })
      .getOne();
  }
  async findAll(): Promise<InvestmentAreaEntity[]> {
    return this.investmentAreaRepository
      .createQueryBuilder('InvestmentArea')
      .leftJoinAndSelect(
        UserEntity,
        '_creator',
        '_creator.id=InvestmentArea.created_by',
      )
      .addSelect(
        'CONCAT(_creator.first_name, " ", _creator.last_name)',
        'creator',
      )
      .getMany();
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
