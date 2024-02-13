import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import UserServiceImpl from './domain/UserServiceImpl';
import { DatabaseModule } from './database.module';
import UserMysqlRepsitory from './domain/UserMysqlRepository';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserServiceImpl, UserMysqlRepsitory],
})
export class AppModule {}
