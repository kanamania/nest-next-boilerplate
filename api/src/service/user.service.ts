import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entity/user.entity';
import { UserEntityRepository } from '../repository/userEntityRepository';
import { Encrypt } from '../utils/encrypt';
import { QueryFailedError } from 'typeorm';
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
    try {
      return this.userRepository
        .createQueryBuilder('User')
        .leftJoinAndSelect(
          UserEntity,
          '_creator',
          '_creator.id=User.created_by',
        )
        .addSelect('CONCAT(User.first_name, " ",User.last_name)', 'name')
        .addSelect('CONCAT("0",User.phone)', 'phone_number')
        .addSelect(
          'CONCAT(_creator.first_name, " ", _creator.last_name)',
          'creator',
        )
        .where('User.id = :id', { id })
        .getOne();
    } catch (e) {
      console.log(e);
      throw QueryFailedError;
    }
  }
  async findByEmail(email: string): Promise<UserEntity | undefined> {
    return this.userRepository
      .createQueryBuilder('User')
      .leftJoinAndSelect(UserEntity, '_creator', '_creator.id=User.created_by')
      .addSelect('CONCAT(User.first_name, " ",User.last_name)', 'name')
      .addSelect('CONCAT("0",User.phone)', 'phone_number')
      .addSelect(
        'CONCAT(_creator.first_name, " ", _creator.last_name)',
        'creator',
      )
      .addSelect('User.password')
      .where('User.email = :email', { email })
      .getOne();
  }
  async findAll(): Promise<UserEntity[]> {
    return this.userRepository
      .createQueryBuilder('User')
      .leftJoinAndSelect(UserEntity, '_creator', '_creator.id=User.created_by')
      .addSelect('CONCAT(User.first_name, " ",User.last_name)', 'name')
      .addSelect('CONCAT("0",User.phone)', 'phone_number')
      .addSelect(
        'CONCAT(_creator.first_name, " ", _creator.last_name)',
        'creator',
      )
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
      .where('User.id = :id', { id })
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
      .where('User.id = :id', { id })
      .execute();
  }
}
