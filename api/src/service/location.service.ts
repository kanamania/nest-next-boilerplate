import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LocationEntity } from '../entity/location.entity';
import { LocationEntityRepository } from '../repository/locationEntityRepository';
@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(LocationEntity)
    private locationRepository: LocationEntityRepository,
  ) {}

  async create(location: LocationEntity): Promise<LocationEntity> {
    return this.locationRepository.save(
      this.locationRepository.create(location),
    );
  }
  async findById(id: number): Promise<LocationEntity | null> {
    return this.locationRepository.findOneBy({ id });
  }
  async findAll(): Promise<LocationEntity[]> {
    return this.locationRepository.find();
  }
  async update(id: string, data: any): Promise<any> {
    return this.locationRepository
      .createQueryBuilder()
      .update()
      .set(data)
      .where('id = :id', { id })
      .execute();
  }
  async delete(id: string): Promise<any> {
    return this.locationRepository
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
