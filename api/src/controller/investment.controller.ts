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
import { InvestmentService } from '../service/investment.service';
import { InvestmentEntity } from '../entity/investment.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TResponse } from '../types/TResponse';
@Controller('investments')
export class InvestmentController {
  private response: TResponse = new TResponse();
  constructor(private investmentService: InvestmentService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() investment: InvestmentEntity) {
    return await this.investmentService.create(investment).then((response) => {
      console.log(response);
      if (!response) {
        this.response.status = 'fail';
        this.response.message = 'Creation fail.';
      } else {
        this.response.code = 201;
        this.response.status = 'success';
        this.response.message = 'Investment creation successful.';
        this.response.data = response;
      }
      return this.response;
    });
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() request: Request) {
    console.log(request.body);
    const investments: Array<InvestmentEntity> =
      await this.investmentService.findAll();
    this.response.code = 200;
    this.response.status = 'success';
    this.response.data = investments;
    return this.response;
  }
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    return await this.investmentService.update(id, body).then((response) => {
      console.log(response);
      if (!response.affected) {
        this.response.status = 'fail';
        this.response.message = 'Update fail.';
      } else {
        this.response.code = 201;
        this.response.status = 'success';
        this.response.message = 'Investment updated successful.';
        this.response.data = response;
      }
      return this.response;
    });
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const obj = await this.investmentService.delete(id);
    if (!obj) {
      this.response.status = 'fail';
      this.response.message = 'Deletion fail.';
    } else {
      this.response.code = 201;
      this.response.status = 'success';
      this.response.message = 'Investment deleted successful.';
    }
    return this.response;
  }
}
