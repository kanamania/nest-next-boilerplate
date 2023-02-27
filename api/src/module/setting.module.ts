import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SettingEntity } from '../entity/setting.entity';
import { SettingController } from '../controller/setting.controller';
import { SettingService } from '../service/setting.service';
import { SettingEntityRepository } from '../repository/settingEntityRepository';
@Module({
  imports: [TypeOrmModule.forFeature([SettingEntity])],
  controllers: [SettingController],
  providers: [SettingService, SettingEntityRepository],
  exports: [SettingService],
})
export class SettingModule {}
