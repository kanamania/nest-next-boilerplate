import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { VirtualColumn } from '../utils/virtualColumn';

export enum InvestmentStatus {
  PENDING = 'pending',
  SEEKING = 'seeking',
  INVESTED = 'invested',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
}
@Entity('Investment')
export class InvestmentEntity {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;
  @Column({ type: 'text' })
  name: string;
  @Column({ type: 'integer', nullable: true })
  banner: number;
  @VirtualColumn()
  banner_url: string;
  @VirtualColumn()
  banner_thumbnail: string;
  @VirtualColumn()
  banner_medium: string;
  @Column({ type: 'longtext', nullable: true })
  description: string;
  @Column({
    type: 'enum',
    enum: InvestmentStatus,
    default: InvestmentStatus.PENDING,
  })
  status: string;
  @VirtualColumn()
  creator: string;
  @Column('bigint')
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
