import { Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';

export class CommonEntity extends BaseEntity {
  @Property({ name: 'created_by', nullable: true, lazy: true })
  createdBy: string;

  @Property({ name: 'updated_by', nullable: true, lazy: true })
  updatedBy: string;

  @Property({
    name: 'is_permanent',
    type: 'boolean',
    default: false,
  })
  isPermanent: boolean;
}
