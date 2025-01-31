import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { JwtModule } from '@nestjs/jwt';
import { User } from '@src/database/entities/user.entity';
import { UserRepository } from '@src/api/user/user.repository';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserRepository],
  imports: [
    MikroOrmModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: 'secret-key',
      signOptions: { algorithm: 'HS256' },
      verifyOptions: { algorithms: ['HS256'] },
    }),
  ],
})
export class AuthModule {}
