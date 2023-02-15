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
import { InvestmentCategorieservice } from '../service/investment.category.service';
import { InvestmentCategoryEntity } from '../entity/investment.category.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TResponse } from '../types/TResponse';
@Controller('investment/categories')
export class InvestmentCategoryController {
  private response: TResponse = new TResponse();
  constructor(private investmentCategorieservice: InvestmentCategorieservice) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() investmentCategory: InvestmentCategoryEntity) {
    return await this.investmentCategorieservice
      .create(investmentCategory)
      .then((response) => {
        console.log(response);
        if (!response) {
          this.response.status = 'fail';
          this.response.message = 'Creation fail.';
        } else {
          this.response.code = 201;
          this.response.status = 'success';
          this.response.message = 'InvestmentCategory creation successful.';
          this.response.data = response;
        }
        return this.response;
      });
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() request: Request) {
    console.log(request.body);
    const investmentCategories: Array<InvestmentCategoryEntity> =
      await this.investmentCategorieservice.findAll();
    this.response.code = 200;
    this.response.status = 'success';
    this.response.data = investmentCategories;
    return this.response;
  }
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    return await this.investmentCategorieservice
      .update(id, body)
      .then((response) => {
        console.log(response);
        if (!response.affected) {
          this.response.status = 'fail';
          this.response.message = 'Update fail.';
        } else {
          this.response.code = 201;
          this.response.status = 'success';
          this.response.message = 'InvestmentCategory updated successful.';
          this.response.data = response;
        }
        return this.response;
      });
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const obj = await this.investmentCategorieservice.delete(id);
    if (!obj) {
      this.response.status = 'fail';
      this.response.message = 'Deletion fail.';
    } else {
      this.response.code = 201;
      this.response.status = 'success';
      this.response.message = 'InvestmentCategory deleted successful.';
    }
    return this.response;
  }
}
