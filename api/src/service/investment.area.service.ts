import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InvestmentAreaEntity } from '../entity/investment.area.entity';
import { InvestmentAreaEntityRepository } from '../repository/investmentAreaEntityRepository';
import { UserEntity } from '../entity/user.entity';
import { FileService } from './file.service';
import { FileEntity } from '../entity/file.entity';
@Injectable()
export class InvestmentAreaService {
  constructor(
    @InjectRepository(InvestmentAreaEntity)
    private investmentAreaRepository: InvestmentAreaEntityRepository,
    private fileService: FileService,
  ) {}

  async create(
    investmentArea: InvestmentAreaEntity,
  ): Promise<InvestmentAreaEntity> {
    const obj = await this.investmentAreaRepository.save(
      this.investmentAreaRepository.create(investmentArea),
    );
    await this.fileService.updateRecordInfo(obj, 'banner');
    return obj;
  }
  async findById(id: number): Promise<InvestmentAreaEntity | null> {
    return this.investmentAreaRepository
      .createQueryBuilder('InvestmentArea')
      .leftJoinAndSelect(
        UserEntity,
        '_creator',
        '_creator.id=InvestmentArea.created_by',
      )
      .leftJoinAndSelect(
        FileEntity,
        '_banner',
        '_banner.id=InvestmentArea.banner',
      )
      .addSelect(
        `CONCAT('${process.env.REACT_APP_API_URL}', '/files/', _banner.hash, '.', _banner.ext)`,
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
      .where('InvestmentArea.id = :id', { id })
      .getOne();
  }
  async findAll(): Promise<InvestmentAreaEntity[]> {
    return this.investmentAreaRepository
      .createQueryBuilder('InvestmentArea')
      .leftJoinAndSelect(
        UserEntity,
        '_creator',
        '_creator.id=InvestmentArea.created_by',
      )
      .leftJoinAndSelect(
        FileEntity,
        '_banner',
        '_banner.id=InvestmentArea.banner',
      )
      .addSelect(
        `CONCAT('${process.env.REACT_APP_API_URL}', '/files/', _banner.hash, '.', _banner.ext)`,
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
    const obj = await this.investmentAreaRepository
      .createQueryBuilder()
      .update()
      .set(data)
      .where('id = :id', { id })
      .execute();
    await this.fileService.updateRecordInfo(obj, 'banner');
    return obj;
  }
  async delete(id: string): Promise<any> {
    return this.investmentAreaRepository
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
