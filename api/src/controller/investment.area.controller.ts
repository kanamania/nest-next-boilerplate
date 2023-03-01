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
import { InvestmentAreaService } from '../service/investment.area.service';
import { InvestmentAreaEntity } from '../entity/investment.area.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TResponse } from '../types/TResponse';
import { UserEntity } from '../entity/user.entity';
@Controller('investment/areas')
export class InvestmentAreaController {
  private response: TResponse = new TResponse();
  constructor(private investmentAreaService: InvestmentAreaService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Req() req, @Body() investmentArea: InvestmentAreaEntity) {
    investmentArea.created_by = req.user.userId;
    return await this.investmentAreaService
      .create(investmentArea)
      .then((response) => {
        console.log(response);
        if (!response) {
          this.response.status = 'fail';
          this.response.message = 'Creation fail.';
        } else {
          this.response.code = 201;
          this.response.status = 'success';
          this.response.message = 'InvestmentArea creation successful.';
          this.response.data = response;
        }
        return this.response;
      });
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async get(@Param('id') id: number) {
    return await this.investmentAreaService.findById(id);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() request: Request) {
    console.log(request.body);
    const investmentAreas: Array<InvestmentAreaEntity> =
      await this.investmentAreaService.findAll();
    this.response.code = 200;
    this.response.status = 'success';
    this.response.data = investmentAreas ?? [];
    return this.response;
  }
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Req() req, @Param('id') id: string, @Body() body: any) {
    body.modified_by = req.user.userId;
    return await this.investmentAreaService
      .update(id, body)
      .then((response) => {
        console.log(response);
        if (!response.affected) {
          this.response.status = 'fail';
          this.response.message = 'Update fail.';
        } else {
          this.response.code = 201;
          this.response.status = 'success';
          this.response.message = 'InvestmentArea updated successful.';
          this.response.data = response;
        }
        return this.response;
      });
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const obj = await this.investmentAreaService.delete(id);
    if (!obj) {
      this.response.status = 'fail';
      this.response.message = 'Deletion fail.';
    } else {
      this.response.code = 201;
      this.response.status = 'success';
      this.response.message = 'InvestmentArea deleted successful.';
    }
    return this.response;
  }
}
