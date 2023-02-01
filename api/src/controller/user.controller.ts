import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from 'src/service/user.service';
import { UserEntity } from '../entity/user.entity';
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  async create(@Body() user: UserEntity) {
    const obj = await this.userService.create(user);
    if (!obj) {
      return 'error in creating user';
    }
    return 'user created successfully';
  }
  @Get()
  async findAll(@Req() request: Request) {
    console.log(request.body);
    const users: Array<UserEntity> = await this.userService.findAll();
    return users;
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    await this.userService.update(id, body);
    return 'user updated';
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.userService.delete(id);
    return 'user deleted';
  }
}
