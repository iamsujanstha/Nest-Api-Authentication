import {
  Entity,
  EntityRepositoryType,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { UserRepository } from '@src/app/user/user.repository';
import { PrimaryEntity } from '@src/common/entities/primary.entity';

@Entity({
  tableName: 'users',
})
export class User extends PrimaryEntity {
  // Primary key for the `users` table
  @PrimaryKey({
    fieldName: 'user_id', // Maps to the `user_id` column in the database
    unique: true,
    nullable: true,
    autoincrement: true,
  })
  userId!: string;

  @Property({ fieldName: 'first_name', nullable: true })
  firstName: string;

  @Property({ fieldName: 'last_name', nullable: true })
  lastName: string;

  @Property({ fieldName: 'email', unique: true })
  email: string;

  @Property({ fieldName: 'password' })
  password: string;

  // Declares the type of repository associated with this entity
  [EntityRepositoryType]?: UserRepository;
  // This property is optional and specifies that this entity uses the `UserRepository`.
  // It helps MikroORM understand which custom repository is tied to this entity.
}
