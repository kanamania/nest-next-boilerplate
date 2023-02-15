import { InvestmentCategoryEntity } from '../entity/investment.category.entity';
import { EntityRepository, Repository } from 'typeorm';
@EntityRepository(InvestmentCategoryEntity)
export class InvestmentCategoryEntityRepository extends Repository<InvestmentCategoryEntity> {}
