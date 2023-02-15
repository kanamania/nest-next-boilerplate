import { EntityRepository, Repository } from 'typeorm';
import { LocationEntity } from '../entity/location.entity';
@EntityRepository(LocationEntity)
export class LocationEntityRepository extends Repository<LocationEntity> {}
