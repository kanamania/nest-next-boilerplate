import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InvestmentCategoryEntity } from '../entity/investment.category.entity';
import { InvestmentCategoryEntityRepository } from '../repository/investmentCategoryEntityRepository';
import { InvestmentEntity } from '../entity/investment.entity';
import { UserEntity } from '../entity/user.entity';
import { FileService } from './file.service';
import { FileEntity } from '../entity/file.entity';
@Injectable()
export class InvestmentCategoryService {
  constructor(
    @InjectRepository(InvestmentCategoryEntity)
    private investmentCategoryRepository: InvestmentCategoryEntityRepository,
    private fileService: FileService,
  ) {}

  async create(
    investmentCategory: InvestmentCategoryEntity,
  ): Promise<InvestmentCategoryEntity> {
    const obj = await this.investmentCategoryRepository.save(
      this.investmentCategoryRepository.create(investmentCategory),
    );
    await this.fileService.updateRecordInfo(obj, 'banner');
    return obj;
  }
  async findById(id: number): Promise<InvestmentCategoryEntity | null> {
    return this.investmentCategoryRepository
      .createQueryBuilder('InvestmentCategory')
      .leftJoinAndSelect(
        UserEntity,
        '_creator',
        '_creator.id=InvestmentCategory.created_by',
      )
      .leftJoinAndSelect(
        FileEntity,
        '_banner',
        '_banner.id=InvestmentCategory.banner',
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
      .where('InvestmentCategory.id = :id', { id })
      .getOne();
  }
  async findAll(): Promise<InvestmentCategoryEntity[]> {
    return this.investmentCategoryRepository
      .createQueryBuilder('InvestmentCategory')
      .leftJoinAndSelect(
        UserEntity,
        '_creator',
        '_creator.id=InvestmentCategory.created_by',
      )
      .leftJoinAndSelect(
        FileEntity,
        '_banner',
        '_banner.id=InvestmentCategory.banner',
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
    const obj = await this.investmentCategoryRepository
      .createQueryBuilder()
      .update()
      .set(data)
      .where('id = :id', { id })
      .execute();
    await this.fileService.updateRecordInfo(obj, 'banner');
    return obj;
  }
  async delete(id: string): Promise<any> {
    return this.investmentCategoryRepository
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
