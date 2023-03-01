import { Controller, Post, Body, NotFoundException } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { Public } from '../utils/ispublic';
import { TResponse } from '../types/TResponse';
import { UserEntity } from '../entity/user.entity';

@Controller()
export class AuthController {
  private response: TResponse = new TResponse();
  constructor(private authService: AuthService) {}
  @Public()
  @Post('auth/login')
  async login(@Body() req: { username?: any; email?: any; password: any }) {
    return this.authService
      .validateUser(req.email ?? req.username, req.password)
      .then((user) => {
        if (user != null) {
          return this.authService.login(user).then((token) => {
            this.response.code = 201;
            this.response.status = 'success';
            this.response.access_token = token;
            this.response.message = 'Login successful';
            this.response.data = user;
            return this.response;
          });
        }
        this.response.code = 401;
        this.response.status = 'failed';
        this.response.message = "Login failed. Email and password don't match";
        return this.response;
      });
  }
  @Public()
  @Post('admin/login')
  async adminLogin(
    @Body() req: { username?: any; email?: any; password: any },
  ) {
    return this.authService
      .validateAdmin(req.email ?? req.username, req.password)
      .then((user: UserEntity) => {
        console.log({ user });
        if (user != null) {
          return this.authService.login(user).then((token) => {
            this.response.code = 201;
            this.response.status = 'success';
            this.response.access_token = token;
            this.response.message = 'Login successful';
            this.response.data = user;
            return this.response;
          });
        }
        this.response.code = 401;
        this.response.status = 'failed';
        this.response.message = "Login failed. Email and password don't match.";
        return this.response;
      });
  }
}
