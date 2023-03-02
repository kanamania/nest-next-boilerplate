import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from 'src/service/user.service';
import { UserEntity } from '../entity/user.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TResponse } from '../types/TResponse';
@Controller('users')
export class UserController {
  private response: TResponse = new TResponse();
  constructor(private userService: UserService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Req() req, @Body() user: UserEntity) {
    user.created_by = req.user.userId;
    return await this.userService.create(user).then((response) => {
      console.log(response);
      if (!response) {
        this.response.status = 'fail';
        this.response.message = 'Creation fail.';
      } else {
        this.response.code = 201;
        this.response.status = 'success';
        this.response.message = 'User creation successful.';
        this.response.data = response;
      }
      return this.response;
    });
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    const users: Array<UserEntity> = await this.userService.findAll();
    this.response.code = 200;
    this.response.status = 'success';
    this.response.data = users ?? [];
    return this.response;
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async get(@Param('id') id: number) {
    return await this.userService.findById(id);
  }
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    return await this.userService.update(id, body).then((response) => {
      console.log(response);
      if (!response.affected) {
        this.response.status = 'fail';
        this.response.message = 'Update fail.';
      } else {
        this.response.code = 201;
        this.response.status = 'success';
        this.response.message = 'User updated successful.';
        this.response.data = response;
      }
      return this.response;
    });
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const obj = await this.userService.delete(id);
    if (!obj) {
      this.response.status = 'fail';
      this.response.message = 'Deletion fail.';
    } else {
      this.response.code = 201;
      this.response.status = 'success';
      this.response.message = 'User deleted successful.';
    }
    return this.response;
  }
}
