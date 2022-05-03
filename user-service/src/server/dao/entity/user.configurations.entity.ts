import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserDetails } from './user.details.entity';

@Entity({ name: 'user_configurations' })
export class UserConfigurations {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'config_key' })
  configKey!: string;

  @Column({ name: 'config_value' })
  configValue!: string;

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

  @ManyToOne(type => UserDetails, user => user.userConfiguration)
  @JoinColumn({ name: 'user_id' })
  userDetails!: UserDetails;
}
