import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SettingEntity } from '../entity/setting.entity';
import { SettingEntityRepository } from '../repository/settingEntityRepository';
import { InvestmentEntity } from '../entity/investment.entity';
import { UserEntity } from '../entity/user.entity';
import { FileService } from './file.service';
import { FileEntity } from '../entity/file.entity';
@Injectable()
export class SettingService {
  constructor(
    @InjectRepository(SettingEntity)
    private settingRepository: SettingEntityRepository,
    private fileService: FileService,
  ) {}

  async create(setting: SettingEntity): Promise<SettingEntity> {
    return this.settingRepository.save(this.settingRepository.create(setting));
  }
  async findById(id: number): Promise<SettingEntity | null> {
    return this.settingRepository
      .createQueryBuilder('Setting')
      .leftJoinAndSelect(
        UserEntity,
        '_creator',
        '_creator.id=Setting.created_by',
      )
      .leftJoinAndSelect(
        FileEntity,
        '_image',
        '_image.id=Setting.value_current and Setting.type="image"',
      )
      .addSelect(
        `CONCAT('${process.env.REACT_APP_API_URL}', '/files/', _image.hash, '.', _image.ext)`,
        'image_url',
      )
      .addSelect(
        `CONCAT('${process.env.REACT_APP_API_URL}', '/files/thumbnail/', _image.hash, '.webp')`,
        'image_thumbnail',
      )
      .addSelect(
        `CONCAT('${process.env.REACT_APP_API_URL}', '/files/medium/', _image.hash, '.webp')`,
        'image_medium',
      )
      .addSelect(
        'CONCAT(_creator.first_name, " ", _creator.last_name)',
        'creator',
      )
      .where('Setting.id = :id', { id })
      .getOne();
  }
  async findAll(): Promise<SettingEntity[]> {
    return this.settingRepository
      .createQueryBuilder('Setting')
      .leftJoinAndSelect(
        UserEntity,
        '_creator',
        '_creator.id=Setting.created_by',
      )
      .leftJoinAndSelect(
        FileEntity,
        '_image',
        '_image.id=Setting.value_current and Setting.type="image"',
      )
      .addSelect(
        `CONCAT('${process.env.REACT_APP_API_URL}', '/files/', _image.hash, '.', _image.ext)`,
        'image_url',
      )
      .addSelect(
        `CONCAT('${process.env.REACT_APP_API_URL}', '/files/thumbnail/', _image.hash, '.webp')`,
        'image_thumbnail',
      )
      .addSelect(
        `CONCAT('${process.env.REACT_APP_API_URL}', '/files/medium/', _image.hash, '.webp')`,
        'image_medium',
      )
      .addSelect(
        'CONCAT(_creator.first_name, " ", _creator.last_name)',
        'creator',
      )
      .getMany();
  }
  async update(id: string, data: any): Promise<any> {
    const obj: any = await this.settingRepository
      .createQueryBuilder()
      .update()
      .set(data)
      .where('id = :id', { id })
      .execute();
    if (obj.type == 'image') {
      await this.fileService.updateRecordInfo(obj, 'value_current');
    }
    return obj;
  }
  async delete(id: string): Promise<any> {
    return this.settingRepository
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
