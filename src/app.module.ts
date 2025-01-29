import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './app/auth/auth.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import mikroOrmConfig from 'src/configs/db-connections.config';
import { UserModule } from 'src/app/user/user.module';

@Module({
  imports: [
    AuthModule,
    MikroOrmModule.forRoot({
      ...mikroOrmConfig,
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
