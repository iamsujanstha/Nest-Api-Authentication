import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { User } from 'src/app/user/user.entity';

export class UserRepository extends EntityRepository<User> {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: EntityRepository<User>,
  ) {
    super(userRepo.getEntityManager(), User);
  }

  async getUserInfo(username: string): Promise<User | null> {
    return this.userRepo.findOne({ email: username });
  }
}
