import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SettingEntity } from '../entity/setting.entity';
import { SettingEntityRepository } from '../repository/settingEntityRepository';
@Injectable()
export class SettingService {
  constructor(
    @InjectRepository(SettingEntity)
    private settingRepository: SettingEntityRepository,
  ) {}

  async create(setting: SettingEntity): Promise<SettingEntity> {
    return this.settingRepository.save(this.settingRepository.create(setting));
  }
  async findById(id: number): Promise<SettingEntity | null> {
    return this.settingRepository.findOneBy({ id });
  }
  async findAll(): Promise<SettingEntity[]> {
    return this.settingRepository.find();
  }
  async update(id: string, data: any): Promise<any> {
    return this.settingRepository
      .createQueryBuilder()
      .update()
      .set(data)
      .where('id = :id', { id })
      .execute();
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
