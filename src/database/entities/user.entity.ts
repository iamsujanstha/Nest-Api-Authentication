import { Entity, EntityRepositoryType, Property } from '@mikro-orm/core';
import { UserRepository } from '@src/api/user/user.repository';
import { PrimaryEntity } from '@src/common/entities/primary.entity';

@Entity({
  tableName: 'users',
})
export class User extends PrimaryEntity {
  // Primary key for the `users` table

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
