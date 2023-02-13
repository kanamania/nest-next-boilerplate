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
    return this.userRepository.findOneBy({ id });
  }
  async findByEmail(email: string): Promise<UserEntity | undefined> {
    return this.userRepository.findOneBy({ email });
  }
  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
  async update(id: string, data: any): Promise<any> {
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
  async delete(id: string): Promise<any> {
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
