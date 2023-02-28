import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { VirtualColumn } from '../utils/virtualColumn';
import { LocationType } from './location.entity';

export enum INVESTMENTSTATUS {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
  COMPLETED = 'completed',
}

@Entity('Investor')
export class InvestorEntity {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;
  @Column('bigint')
  user_id: number;
  @Column('bigint')
  investment_id: number;
  @Column('bigint')
  amount: number;
  @Column({ type: 'text' })
  notes: string;
  @Column({
    type: 'enum',
    enum: INVESTMENTSTATUS,
    default: INVESTMENTSTATUS.PENDING,
  })
  status: string;
  @VirtualColumn()
  investment: string;
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
