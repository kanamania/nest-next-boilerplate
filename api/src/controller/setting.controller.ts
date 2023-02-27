import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
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
import { SettingEntity } from '../entity/setting.entity';
import { SettingService } from '../service/setting.service';
@Controller('settings')
export class SettingController {
  private response: TResponse = new TResponse();
  constructor(private settingService: SettingService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor('banner'))
  async create(
    @Body() setting: SettingEntity,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1000 }),
          new FileTypeValidator({ fileType: 'image/jpeg' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    return await this.settingService.create(setting).then((response) => {
      if (!response) {
        this.response.status = 'fail';
        this.response.message = 'Creation fail.';
      } else {
        this.response.code = 201;
        this.response.status = 'success';
        this.response.message = 'Setting creation successful.';
        this.response.data = response;
      }
      return this.response;
    });
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async find(@Param('id') id: string) {
    const setting: SettingEntity = await this.settingService.findById(
      parseInt(id),
    );
    this.response.code = 200;
    this.response.status = 'success';
    this.response.data = setting;
    return setting;
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() request: Request) {
    console.log(request.body);
    const settings: Array<SettingEntity> = await this.settingService.findAll();
    this.response.code = 200;
    this.response.status = 'success';
    this.response.data = settings ?? [];
    return this.response;
  }
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    return await this.settingService.update(id, body).then((response) => {
      console.log(response);
      if (!response.affected) {
        this.response.status = 'fail';
        this.response.message = 'Update fail.';
      } else {
        this.response.code = 201;
        this.response.status = 'success';
        this.response.message = 'Setting updated successful.';
        this.response.data = response;
      }
      return this.response;
    });
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const obj = await this.settingService.delete(id);
    if (!obj) {
      this.response.status = 'fail';
      this.response.message = 'Deletion fail.';
    } else {
      this.response.code = 201;
      this.response.status = 'success';
      this.response.message = 'Setting deleted successful.';
    }
    return this.response;
  }
}
