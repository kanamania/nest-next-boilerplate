import { Controller, Post, Body, UseFilters } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { Request } from 'express';
import { Public } from '../utils/ispublic';
import { TResponse } from '../types/TResponse';
import { HttpExceptionFilter } from '../utils/http-exception.filter';

@Controller()
@UseFilters(new HttpExceptionFilter())
export class AuthController {
  private response: TResponse = new TResponse();
  constructor(private authService: AuthService) {}
  @Public()
  @Post('auth/login')
  async login(@Body() req: { username?: any; email?: any; password: any }) {
    try {
      return this.authService
        .validateUser(req.email ?? req.username, req.password)
        .then((user) => {
          if (user != null) {
            this.authService.login(user).then((token) => {
              this.response.code = 201;
              this.response.status = 'success';
              this.response.access_token = token;
              this.response.data = user;
            });
          } else {
            this.response.code = 403;
            this.response.status = 'Failed';
          }
          return this.response;
        });
    } catch (e) {
      this.response.code = 403;
      this.response.status = 'Failed';
      return this.response;
    }
  }
}
