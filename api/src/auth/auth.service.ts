import { Injectable } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserEntity } from '../entity/user.entity';
import { Encrypt } from '../utils/encrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    if (!email || !pass) {
      console.log('nothing found');
      return null;
    }
    const user: UserEntity = await this.usersService.findByEmail(email);
    if (user != null) {
      console.log('email found');
      const check = await Encrypt.comparePassword(pass, user.password);
      if (check) {
        console.log('password works');
        const {
          password,
          created_at,
          created_by,
          modified_by,
          updated_at,
          deleted_at,
          deleted_by,
          ...result
        } = user;
        return result;
      }
    }
    return null;
  }
  async login(user: any) {
    const payload = { email: user.email, sub: user.userId };
    return this.jwtService.sign(payload);
  }
}
