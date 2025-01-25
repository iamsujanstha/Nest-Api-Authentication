import { EntityRepository } from '@mikro-orm/postgresql';
import { User } from 'src/app/user/user.entity';

export class UserRepository extends EntityRepository<User> {
  // A custom method to fetch user information based on the username
  async getUserInfo(username: string) {
    // Use the EntityManager to interact with the database through raw SQL
    const knex = await this.getEntityManager()
      .getKnex()
      .raw(`SELECT * FROM users WHERE username = '${username}'`);
    return knex.rows[0];
  }
}
