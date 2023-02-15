import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entity/user.entity';
import { UserEntityRepository } from '../repository/userEntityRepository';
import { Encrypt } from '../utils/encrypt';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: UserEntityRepository,
  ) {}

  async create(user: UserEntity): Promise<UserEntity> {
    user.password = await Encrypt.cryptPassword(user.password);
    return this.userRepository.save(this.userRepository.create(user));
  }
  async findById(id: number): Promise<UserEntity | null> {
    return this.userRepository
      .createQueryBuilder('User')
      .leftJoinAndSelect(UserEntity, '_creator', '_creator.id=User.created_by')
      .addSelect('User.first_name || " " || User.last_name', 'name')
      .addSelect('_creator.first_name || " " || _creator.last_name', 'creator')
      .where('id = :id', { id })
      .getOne();
  }
  async findByEmail(email: string): Promise<UserEntity | undefined> {
    return this.userRepository
      .createQueryBuilder('User')
      .leftJoinAndSelect(UserEntity, '_creator', '_creator.id=User.created_by')
      .addSelect('User.first_name || " " || User.last_name', 'name')
      .addSelect('_creator.first_name || " " || _creator.last_name', 'creator')
      .where('email = :email', { email })
      .getOne();
  }
  async findAll(): Promise<UserEntity[]> {
    return this.userRepository
      .createQueryBuilder('User')
      .leftJoinAndSelect(UserEntity, '_creator', '_creator.id=User.created_by')
      .addSelect('User.first_name || " " || User.last_name', 'name')
      .addSelect('_creator.first_name || " " || _creator.last_name', 'creator')
      .getMany();
  }
  async update(id: string, data: any): Promise<any> {
    return this.userRepository
      .createQueryBuilder('User')
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
  async delete(id: string): Promise<any> {
    return this.userRepository
      .createQueryBuilder('User')
      .update()
      .set({
        deleted_by: null,
        deleted_at: new Date(),
      })
      .where('id = :id', { id })
      .execute();
  }
}
