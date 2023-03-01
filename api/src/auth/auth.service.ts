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
      return null;
    }
    const user: UserEntity = await this.usersService.findByEmail(email);
    if (user != null && !['admin', 'webmaster'].includes(user.type)) {
      const check = await Encrypt.comparePassword(pass, user.password);
      if (check) {
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
  async validateAdmin(email: any, pass: any) {
    if (!email || !pass) {
      return null;
    }
    const user: UserEntity = await this.usersService.findByEmail(email);
    if (user != null && ['admin', 'webmaster'].includes(user.type)) {
      console.log({ user2: user });
      const check = await Encrypt.comparePassword(pass, user.password);
      if (check) {
        console.log({ user3: user });
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
  async login(user: { email?: string; username?: string; id: number }) {
    const payload = { email: user.email ?? user.username, sub: user.id };
    return this.jwtService.sign(payload);
  }
}
