import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthModule } from '@src/api/auth/auth.module';
import { UserModule } from '@src/api/user/user.module';
import { SuccessResponseInterceptor } from '@src/interceptors/success-response.interceptor';

@Module({
  imports: [AuthModule, UserModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: SuccessResponseInterceptor,
    },
  ],
})
export class ApiModule {}
