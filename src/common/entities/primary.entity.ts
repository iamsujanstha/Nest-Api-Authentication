import { CommonEntity } from './common.entity';
import { PrimaryKey } from '@mikro-orm/core';

export class PrimaryEntity extends CommonEntity {
  @PrimaryKey({ name: 'id', autoincrement: true })
  id: number;
}
