import { InvestmentAreaEntity } from '../entity/investment.area.entity';
import { EntityRepository, Repository } from 'typeorm';
@EntityRepository(InvestmentAreaEntity)
export class InvestmentAreaEntityRepository extends Repository<InvestmentAreaEntity> {}
