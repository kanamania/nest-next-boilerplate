import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LocationEntity } from '../entity/location.entity';
import { LocationEntityRepository } from '../repository/locationEntityRepository';
import { UserEntity } from '../entity/user.entity';
import { FileService } from './file.service';
import { FileEntity } from '../entity/file.entity';
@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(LocationEntity)
    private locationRepository: LocationEntityRepository,
    private fileService: FileService,
  ) {}

  async create(location: LocationEntity): Promise<LocationEntity> {
    const obj = await this.locationRepository.save(
      this.locationRepository.create(location),
    );
    await this.fileService.updateRecordInfo(obj, 'banner');
    return obj;
  }
  async findById(id: number): Promise<LocationEntity | null> {
    return this.locationRepository
      .createQueryBuilder()
      .leftJoinAndSelect(
        UserEntity,
        '_creator',
        '_creator.id=Location.created_by',
      )
      .leftJoinAndSelect(FileEntity, '_banner', '_banner.id=Location.banner')
      .addSelect(
        `CONCAT('${process.env.REACT_APP_API_URL}', '/files/', _banner.hash, '.webp')`,
        'banner_url',
      )
      .addSelect(
        `CONCAT('${process.env.REACT_APP_API_URL}', '/files/thumbnail/', _banner.hash, '.webp')`,
        'banner_thumbnail',
      )
      .addSelect(
        `CONCAT('${process.env.REACT_APP_API_URL}', '/files/medium/', _banner.hash, '.webp')`,
        'banner_medium',
      )
      .addSelect(
        'CONCAT(_creator.first_name, " ", _creator.last_name)',
        'creator',
      )
      .where('Location.id = :id', { id })
      .getOne();
  }
  async findAll(): Promise<LocationEntity[]> {
    return this.locationRepository
      .createQueryBuilder('Location')
      .leftJoinAndSelect(
        UserEntity,
        '_creator',
        '_creator.id=Location.created_by',
      )
      .leftJoinAndSelect(FileEntity, '_banner', '_banner.id=Location.banner')
      .addSelect(
        `CONCAT('${process.env.REACT_APP_API_URL}', '/files/', _banner.hash, '.webp')`,
        'banner_url',
      )
      .addSelect(
        `CONCAT('${process.env.REACT_APP_API_URL}', '/files/thumbnail/', _banner.hash, '.webp')`,
        'banner_thumbnail',
      )
      .addSelect(
        `CONCAT('${process.env.REACT_APP_API_URL}', '/files/medium/', _banner.hash, '.webp')`,
        'banner_medium',
      )
      .addSelect(
        'CONCAT(_creator.first_name, " ", _creator.last_name)',
        'creator',
      )
      .getMany();
  }
  async update(id: string, data: any): Promise<any> {
    const obj = await this.locationRepository
      .createQueryBuilder()
      .update()
      .set(data)
      .where('id = :id', { id })
      .execute();
    await this.fileService.updateRecordInfo(obj, 'banner');
    return obj;
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
