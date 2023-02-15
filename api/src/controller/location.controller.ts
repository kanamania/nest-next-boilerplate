import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { LocationService } from '../service/location.service';
import { LocationEntity } from '../entity/location.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TResponse } from '../types/TResponse';
@Controller('locations')
export class LocationController {
  private response: TResponse = new TResponse();
  constructor(private locationService: LocationService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() location: LocationEntity) {
    return await this.locationService.create(location).then((response) => {
      console.log(response);
      if (!response) {
        this.response.status = 'fail';
        this.response.message = 'Creation fail.';
      } else {
        this.response.code = 201;
        this.response.status = 'success';
        this.response.message = 'Location creation successful.';
        this.response.data = response;
      }
      return this.response;
    });
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() request: Request) {
    console.log(request.body);
    const locations: Array<LocationEntity> =
      await this.locationService.findAll();
    this.response.code = 200;
    this.response.status = 'success';
    this.response.data = locations;
    return this.response;
  }
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    return await this.locationService.update(id, body).then((response) => {
      console.log(response);
      if (!response.affected) {
        this.response.status = 'fail';
        this.response.message = 'Update fail.';
      } else {
        this.response.code = 201;
        this.response.status = 'success';
        this.response.message = 'Location updated successful.';
        this.response.data = response;
      }
      return this.response;
    });
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const obj = await this.locationService.delete(id);
    if (!obj) {
      this.response.status = 'fail';
      this.response.message = 'Deletion fail.';
    } else {
      this.response.code = 201;
      this.response.status = 'success';
      this.response.message = 'Location deleted successful.';
    }
    return this.response;
  }
}
