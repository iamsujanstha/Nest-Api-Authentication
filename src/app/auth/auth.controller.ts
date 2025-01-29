import { Protected, Public } from '@src/decorators/public';

import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from '@src/app/auth/auth.service';
import { LoginDto } from '@src/app/auth/auth.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ResponseMessage } from '@src/decorators/response.decorator';
import { SuccessMessage } from '@src/utils';
import { User } from '@src/app/user/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  create(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Protected()
  @ApiBearerAuth()
  @Get('init')
  @ResponseMessage(SuccessMessage.FETCH, 'User Info')
  init(user: User) {
    return this.authService.init(user);
  }
}
