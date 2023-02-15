import { InvestorEntity } from '../entity/investor.entity';
import { EntityRepository, Repository } from 'typeorm';
@EntityRepository(InvestorEntity)
export class InvestorEntityRepository extends Repository<InvestorEntity> {}
