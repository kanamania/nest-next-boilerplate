import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileEntity } from '../entity/file.entity';
import { FileEntityRepository } from '../repository/fileEntityRepository';
import { fileType } from '../utils/fileType';
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
      hash: file.filename,
      path: file.path,
      size: file.size,
      state: 'BAD',
      type: fileType(file.mime),
      created_by: user.id,
    });
  }
  async findAll(): Promise<FileEntity[] | null> {
    return this.fileRepository.find();
  }
  async findById(id: number): Promise<FileEntity | null> {
    return this.fileRepository.findOneBy({ id });
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
