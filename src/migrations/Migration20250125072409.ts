import { Migration } from '@mikro-orm/migrations';

export class Migration20250125072409 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      `create table "users" ("id" serial not null, "user_id" varchar(255) not null, "created_at" timestamptz null, "updated_at" timestamptz null, "created_by" varchar(255) null, "updated_by" varchar(255) null, "is_permanent" boolean not null default false, "first_name" varchar(255) null, "last_name" varchar(255) null, "email" varchar(255) not null, "password" varchar(255) not null, constraint "users_pkey" primary key ("id", "user_id"));`,
    );
    this.addSql(
      `alter table "users" add constraint "users_user_id_unique" unique ("user_id");`,
    );
    this.addSql(
      `alter table "users" add constraint "users_email_unique" unique ("email");`,
    );
  }
}
