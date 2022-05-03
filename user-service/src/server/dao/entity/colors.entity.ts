import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'colors' })
export class Colors {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'name', length: 100 })
  name!: string;

  @Column({ name: 'type', length: 100 })
  type!: string;

  @Column({ name: 'code', length: 100 })
  code!: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'NOW()',
  })
  createdAt!: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'NOW()',
  })
  updatedAt!: Date;
}
