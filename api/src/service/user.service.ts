import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entity/user.entity';
import { UserEntityRepository } from '../repository/userEntityRepository';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: UserEntityRepository,
  ) {}
  create(user: UserEntity): Promise<UserEntity> {
    return this.userRepository.save(this.userRepository.create(user));
  }
  findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
  update(id: string, data: any): Promise<any> {
    return this.userRepository
      .createQueryBuilder()
      .update()
      .set({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone,
        modified_by: data.modified_by,
        updated_at: new Date(),
      })
      .where('id = :id', { id })
      .execute();
  }
  delete(id: string): Promise<any> {
    return this.userRepository
      .createQueryBuilder()
      .update()
      .set({
        deleted_by: null,
        deleted_at: new Date(),
      })
      .where('id = :id', { id })
      .execute();
  }
}
