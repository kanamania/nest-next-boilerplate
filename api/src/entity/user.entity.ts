import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { VirtualColumn } from '../utils/virtualColumn';

export enum UserType {
  INVESTOR = 'investor',
  SEEKER = 'seeker',
  CONSULTANT = 'consultant',
  ADMIN = 'admin',
  WEBMASTER = 'webmaster',
}
@Entity('User')
export class UserEntity {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 64 })
  first_name: string;
  @Column({ type: 'varchar', length: 64 })
  last_name: string;
  @VirtualColumn()
  name: string;
  @Column({ type: 'varchar', length: 64 })
  email: string;
  @Column('bigint')
  phone: number;
  @VirtualColumn()
  phone_number: string;
  @Column({ type: 'text', select: false })
  password: string;
  @Column({ type: 'enum', enum: UserType })
  type: string;
  @Column({ type: 'text', nullable: true })
  avatar: string;
  @VirtualColumn()
  avatar_url: string;
  @VirtualColumn()
  avatar_thumbnail: string;
  @VirtualColumn()
  avatar_medium: string;
  @VirtualColumn()
  creator: string;
  @Column('bigint', { unsigned: true })
  created_by: number;
  @Column('bigint', { unsigned: true, nullable: true })
  modified_by: number;
  @Column('bigint', { unsigned: true, nullable: true })
  deleted_by: number;

  @Column('timestamp', {
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  created_at: Date = new Date();
  @Column('timestamp', {
    onUpdate: 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  updated_at: Date;
  @Column('timestamp', { nullable: true })
  deleted_at: Date;
}
