import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ApiModule } from '@src/api/api.module';
import { mikroOrmConfig } from '@src/database/mikro-orm/mikro-orm.config';

@Module({
  imports: [MikroOrmModule.forRoot(mikroOrmConfig), ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
