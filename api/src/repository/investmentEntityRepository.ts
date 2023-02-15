import { InvestmentEntity } from '../entity/investment.entity';
import { EntityRepository, Repository } from 'typeorm';
@EntityRepository(InvestmentEntity)
export class InvestmentEntityRepository extends Repository<InvestmentEntity> {}
