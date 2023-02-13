import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entity/user.entity';
import { UserService } from '../service/user.service';
import { UserController } from '../controller/user.controller';
import { UserEntityRepository } from '../repository/userEntityRepository';
@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService, UserEntityRepository],
  exports: [UserService],
})
export class UserModule {}
