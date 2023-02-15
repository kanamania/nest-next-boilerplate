import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from '../entity/file.entity';
import { FileService } from '../service/file.service';
import { FileController } from '../controller/file.controller';
import { FileEntityRepository } from '../repository/fileEntityRepository';
@Module({
  imports: [TypeOrmModule.forFeature([FileEntity])],
  controllers: [FileController],
  providers: [FileService, FileEntityRepository],
  exports: [FileService],
})
export class FileModule {}
