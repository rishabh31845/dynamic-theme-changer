import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserConfigurations } from './user.configurations.entity';

@Entity({ name: 'user_details' })
export class UserDetails {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'name', length: 100 })
  name!: string;

  @Column({ name: 'email_id', length: 500, unique: true })
  emailId!: string;

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

  @OneToMany(type => UserConfigurations, userConfig => userConfig.userDetails, {
    onDelete: 'CASCADE',
    cascade: ['insert', 'update'],
    eager: true
  })
  userConfiguration!: UserConfigurations[];
}
