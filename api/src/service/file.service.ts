import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileEntity } from '../entity/file.entity';
import { FileEntityRepository } from '../repository/fileEntityRepository';
import { fileType } from '../utils/fileType';
import { InvestmentEntity } from '../entity/investment.entity';
import { UserEntity } from '../entity/user.entity';
@Injectable()
export class FileService {
  constructor(
    @InjectRepository(FileEntity)
    private fileRepository: FileEntityRepository,
  ) {}

  async save(file, user): Promise<FileEntity> {
    return this.fileRepository.save({
      name: file.originalname,
      mime: file.mimetype,
      hash: file.filename.split('.')[0],
      path: file.path,
      size: file.size,
      ext: file.filename.split('.')[1],
      state: 'BAD',
      type: fileType(file.mime),
      created_by: user.id,
    });
  }
  async findById(id: number): Promise<FileEntity | null> {
    return this.fileRepository
      .createQueryBuilder('File')
      .leftJoinAndSelect(UserEntity, '_creator', '_creator.id=File.created_by')
      .addSelect(
        'CONCAT(_creator.first_name, " ", _creator.last_name)',
        'creator',
      )
      .where('File.id = :id', { id })
      .getOne();
  }
  async findAll(): Promise<FileEntity[]> {
    return this.fileRepository
      .createQueryBuilder('File')
      .leftJoinAndSelect(UserEntity, '_creator', '_creator.id=File.created_by')
      .addSelect(
        'CONCAT(_creator.first_name, " ", _creator.last_name)',
        'creator',
      )
      .getMany();
  }
  async delete(id: number): Promise<any> {
    return this.fileRepository
      .createQueryBuilder()
      .update()
      .set({
        deleted_by: null,
        deleted_at: new Date(),
      })
      .where('id = :id', { id })
      .execute();
  }
  async updateRecordInfo(obj: any, field: string): Promise<any> {
    return this.fileRepository
      .createQueryBuilder()
      .update()
      .set({
        record_type: obj.constructor.name,
        record_id: obj.id,
        state: 'good',
      })
      .where('id = :id', { id: obj[field] })
      .execute();
  }
  async update(id: number, file, user): Promise<any> {
    return this.fileRepository
      .createQueryBuilder()
      .update()
      .set({
        name: file.originalname,
        mime: file.mimetype,
        hash: file.filename,
        path: file.path,
        size: file.size,
        state: 'GOOD',
        type: fileType(file.mime),
        modified_by: user.id,
      })
      .where('id = :id', { id })
      .execute();
  }
}
