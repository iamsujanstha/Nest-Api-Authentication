import { UserRepository } from '@src/api/user/user.repository';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '@src/api/auth/auth.dto';
import { HttpStatus, Injectable } from '@nestjs/common';
import { RunTimeException } from '@src/exception/runtime.exception';
import * as bcrypt from 'bcrypt';
import { User } from '@src/database/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userRepo: UserRepository,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.userRepo.getUserInfo(loginDto.username);

    if (!user) {
      throw new RunTimeException(HttpStatus.NOT_FOUND, 'User not found');
    }

    console.log({ loginDto }, { user });
    const hashed = await bcrypt.hash('sujan123', 10);
    console.log(hashed);
    const matchPassword = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (!matchPassword) {
      throw new RunTimeException(
        HttpStatus.BAD_REQUEST,
        'Password did not match',
      );
    }

    return this.getTokens({ email: loginDto.username, id: user?.id });
  }

  async init(user: User) {
    return {
      userInfo: user,
    };
  }

  async getTokens(payload: any) {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(payload, { expiresIn: 60 * 60 * 15 }),
      this.jwtService.signAsync(payload, { expiresIn: 60 * 60 * 24 * 7 }),
    ]);
    return {
      access_token: at,
      refresh_token: rt,
    };
  }
}
