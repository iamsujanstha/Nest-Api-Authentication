import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { UserController } from '@src/api/user/user.controller';
import { User } from '@src/database/entities/user.entity';
import { UserRepository } from '@src/api/user/user.repository';
import { UserService } from '@src/api/user/user.service';

@Module({
  // The `forFeature` method is used to register specific entities (in this case, `User`)
  // that the module needs to interact with.
  // This sets up the repository and database context for the `User` entity.
  imports: [MikroOrmModule.forFeature([User])],
  controllers: [UserController],
  // Declares the providers (services or repositories) available in this module
  providers: [UserService, UserRepository],
})
export class UserModule {}
