import { PrimaryKey, Property } from '@mikro-orm/core';

export class BaseEntity {
  @PrimaryKey({ name: 'id', autoincrement: true })
  id: number;

  @Property({
    name: 'created_at',
    lazy: true,
    onCreate: () => new Date(),
    nullable: true,
  })
  createdAt: Date;

  @Property({
    name: 'updated_at',
    onUpdate: () => new Date(),
    nullable: true,
    lazy: true,
  })
  updatedAt: Date;
}
