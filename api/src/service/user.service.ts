import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entity/user.entity';
import { UserEntityRepository } from '../repository/userEntityRepository';
import { Encrypt } from '../utils/encrypt';
import { QueryFailedError } from 'typeorm';
import { FileEntity } from '../entity/file.entity';
import { FileService } from './file.service';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: UserEntityRepository,
    private fileService: FileService,
  ) {}

  async create(user: UserEntity): Promise<UserEntity> {
    if (user.password == undefined) user.password = '123456';
    user.password = await Encrypt.cryptPassword(user.password);
    const obj = await this.userRepository.save(
      this.userRepository.create(user),
    );
    await this.fileService.updateRecordInfo(obj, 'avatar');
    return obj;
  }
  async findById(id: number): Promise<UserEntity | null> {
    return this.userRepository
      .createQueryBuilder('User')
      .leftJoinAndSelect(UserEntity, '_creator', '_creator.id=User.created_by')
      .leftJoinAndSelect(FileEntity, '_avatar', '_avatar.id=User.avatar')
      .addSelect(
        `CONCAT('${process.env.REACT_APP_API_URL}', '/files/', _avatar.hash, '.', _avatar.ext)`,
        'avatar_url',
      )
      .addSelect(
        `CONCAT('${process.env.REACT_APP_API_URL}', '/files/thumbnail/', _avatar.hash, '.webp')`,
        'avatar_thumbnail',
      )
      .addSelect(
        `CONCAT('${process.env.REACT_APP_API_URL}', '/files/medium/', _avatar.hash, '.webp')`,
        'avatar_medium',
      )
      .addSelect('CONCAT(User.first_name, " ",User.last_name)', 'name')
      .addSelect('CONCAT("0",User.phone)', 'phone_number')
      .addSelect(
        'CONCAT(_creator.first_name, " ", _creator.last_name)',
        'creator',
      )
      .where('User.id = :id', { id })
      .getOne();
  }
  async findByEmail(email: string): Promise<UserEntity | undefined> {
    return this.userRepository
      .createQueryBuilder('User')
      .leftJoinAndSelect(UserEntity, '_creator', '_creator.id=User.created_by')
      .leftJoinAndSelect(FileEntity, '_avatar', '_avatar.id=User.avatar')
      .addSelect(
        `CONCAT('${process.env.REACT_APP_API_URL}', '/files/', _avatar.hash, '.', _avatar.ext)`,
        'avatar_url',
      )
      .addSelect(
        `CONCAT('${process.env.REACT_APP_API_URL}', '/files/thumbnail/', _avatar.hash, '.webp')`,
        'avatar_thumbnail',
      )
      .addSelect(
        `CONCAT('${process.env.REACT_APP_API_URL}', '/files/medium/', _avatar.hash, '.webp')`,
        'avatar_medium',
      )
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
      .leftJoinAndSelect(FileEntity, '_avatar', '_avatar.id=User.avatar')
      .addSelect(
        `CONCAT('${process.env.REACT_APP_API_URL}', '/files/', _avatar.hash, '.', _avatar.ext)`,
        'avatar_url',
      )
      .addSelect(
        `CONCAT('${process.env.REACT_APP_API_URL}', '/files/thumbnail/', _avatar.hash, '.webp')`,
        'avatar_thumbnail',
      )
      .addSelect(
        `CONCAT('${process.env.REACT_APP_API_URL}', '/files/medium/', _avatar.hash, '.webp')`,
        'avatar_medium',
      )
      .addSelect('CONCAT(User.first_name, " ",User.last_name)', 'name')
      .addSelect('CONCAT("0",User.phone)', 'phone_number')
      .addSelect(
        'CONCAT(_creator.first_name, " ", _creator.last_name)',
        'creator',
      )
      .where('User.type NOT IN ("webmaster","admin")')
      .getMany();
  }
  async update(id: string, data: any): Promise<any> {
    if (data.password) {
      data.password = await Encrypt.cryptPassword(data.password);
    }
    const obj = await this.userRepository
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
    await this.fileService.updateRecordInfo(obj, 'avatar');
    return obj;
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
