import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TResponse } from '../types/TResponse';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from '../service/file.service';
import { FileUploadOptions } from '../utils/fileOptions';
import { FileEntity } from '../entity/file.entity';
@Controller('files')
export class FileController {
  private response: TResponse = new TResponse();
  constructor(private fileService: FileService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor('file', FileUploadOptions))
  async upload(@UploadedFile() file, @Req() req: Request) {
    console.log(file);
    return await this.fileService.save(file, req.user).then((response) => {
      console.log(response);
      if (!response) {
        this.response.status = 'fail';
        this.response.message = 'File upload fail.';
      } else {
        this.response.code = 201;
        this.response.status = 'success';
        this.response.message = 'File uploaded successful.';
        this.response.data = response;
      }
      return this.response;
    });
  }
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @Patch(':id')
  @UseInterceptors(FileInterceptor('file', FileUploadOptions))
  async update(
    @UploadedFile() file,
    @Param('id') id: number,
    @Req() req: Request,
  ) {
    console.log(file);
    return await this.fileService
      .update(id, file, req.user)
      .then((response) => {
        console.log(response);
        if (!response) {
          this.response.status = 'fail';
          this.response.message = 'File update fail.';
        } else {
          this.response.code = 201;
          this.response.status = 'success';
          this.response.message = 'File updated successful.';
          this.response.data = response;
        }
        return this.response;
      });
  }
  @UseGuards(JwtAuthGuard)
  @Get('all')
  async findAll() {
    const users: Array<FileEntity> = await this.fileService.findAll();
    this.response.message = null;
    this.response.code = 200;
    this.response.status = 'success';
    this.response.data = users;
    return this.response;
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.fileService.delete(id).then((response) => {
      if (!response) {
        this.response.status = 'fail';
        this.response.message = 'Deletion fail.';
      } else {
        this.response.code = 201;
        this.response.status = 'success';
        this.response.message = 'User deleted successful.';
      }
      return this.response;
    });
  }
}
