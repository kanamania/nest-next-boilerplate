import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { VirtualColumn } from '../utils/virtualColumn';

export enum LocationType {
  COUNTRY = 'country',
  REGION = 'region',
  DISTRICT = 'district',
  WARD = 'ward',
}
@Entity('Location')
export class LocationEntity {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;
  @Column({ type: 'text' })
  name: string;
  @Column({ type: 'text', nullable: true })
  banner: string;
  @Column({ type: 'longtext', nullable: true })
  description: string;
  @Column({ type: 'enum', enum: LocationType })
  type: string;
  @VirtualColumn()
  creator: string;
  @Column('bigint', { unsigned: true, nullable: true })
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
