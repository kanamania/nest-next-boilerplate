import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InvestmentEntity } from '../entity/investment.entity';
import { InvestmentEntityRepository } from '../repository/investmentEntityRepository';
import { FileService } from './file.service';
import { UserEntity } from '../entity/user.entity';
import { FileEntity } from '../entity/file.entity';
@Injectable()
export class InvestmentService {
  constructor(
    @InjectRepository(InvestmentEntity)
    private investmentRepository: InvestmentEntityRepository,
    private fileService: FileService,
  ) {}

  async create(investment: InvestmentEntity): Promise<InvestmentEntity> {
    const obj: InvestmentEntity = await this.investmentRepository.save(
      this.investmentRepository.create(investment),
    );
    await this.fileService.updateRecordInfo(obj, 'banner');
    return obj;
  }
  async findById(id: number): Promise<InvestmentEntity | null> {
    return this.investmentRepository
      .createQueryBuilder('Investment')
      .leftJoinAndSelect(
        UserEntity,
        '_creator',
        '_creator.id=Investment.created_by',
      )
      .leftJoinAndSelect(FileEntity, '_banner', '_banner.id=Investment.banner')
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
      .where('Investment.id = :id', { id })
      .getOne();
  }
  async findAll(): Promise<InvestmentEntity[]> {
    return this.investmentRepository
      .createQueryBuilder('Investment')
      .leftJoinAndSelect(
        UserEntity,
        '_creator',
        '_creator.id=Investment.created_by',
      )
      .leftJoinAndSelect(FileEntity, '_banner', '_banner.id=Investment.banner')
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
    const obj = await this.investmentRepository
      .createQueryBuilder()
      .update()
      .set(data)
      .where('id = :id', { id })
      .execute();
    await this.fileService.updateRecordInfo(obj, 'banner');
    return obj;
  }
  async delete(id: string): Promise<any> {
    return this.investmentRepository
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
