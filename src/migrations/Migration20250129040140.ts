import { Migration } from '@mikro-orm/migrations';

export class Migration20250129040140 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "users" drop constraint "users_user_id_unique";`);
    this.addSql(`alter table "users" drop constraint "users_pkey";`);
    this.addSql(`alter table "users" drop column "user_id";`);

    this.addSql(`alter table "users" add constraint "users_pkey" primary key ("id");`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "users" drop constraint "users_pkey";`);

    this.addSql(`alter table "users" add column "user_id" serial;`);
    this.addSql(`alter table "users" add constraint "users_user_id_unique" unique ("user_id");`);
    this.addSql(`alter table "users" add constraint "users_pkey" primary key ("id", "user_id");`);
  }

}
