import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
  @Column({ type: 'text', nullable: true })
  banner: string;
  @Column({ type: 'longtext', nullable: true })
  description: string;
  @Column({
    type: 'enum',
    enum: InvestmentStatus,
    default: InvestmentStatus.PENDING,
  })
  status: string;
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
