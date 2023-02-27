import { EntityRepository, Repository } from 'typeorm';
import { SettingEntity } from '../entity/setting.entity';
@EntityRepository(SettingEntity)
export class SettingEntityRepository extends Repository<SettingEntity> {}
