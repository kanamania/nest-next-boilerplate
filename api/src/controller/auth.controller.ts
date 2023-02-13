import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { Request } from 'express';
import { Public } from '../utils/ispublic';
import { TResponse } from '../types/TResponse';

@Controller()
export class AuthController {
  private response: TResponse = new TResponse();
  constructor(private authService: AuthService) {}
  @Public()
  @Post('auth/login')
  async login(@Req() req: Request) {
    try {
      console.log(req.body);
      return this.authService
        .validateUser(req.body.email, req.body.password)
        .then((user) => {
          console.log(user);
          if (user != null) {
            console.log('not null');
            this.response.code = 201;
            this.response.status = 'success';
            this.response.access_token = this.authService.login(req.body);
            this.response.data = user;
          } else {
            console.log('here null');
            this.response.code = 403;
            this.response.status = 'Failed';
          }
          return this.response;
        });
    } catch (e) {
      console.log(e);
      this.response.code = 403;
      this.response.status = 'Failed';
      return this.response;
    }
  }
}
