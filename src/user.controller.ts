import { Controller, Get, Inject } from '@nestjs/common';
// import { UserService } from './domain/UserService';
import User from './domain/User';
import UserServiceImpl from './domain/UserServiceImpl';
import { UserService } from './domain/UserService';

@Controller()
export class UserController {
  constructor(
    @Inject(UserServiceImpl) private readonly userService: UserService,
  ) {}

  @Get()
  getHello() {
    this.userService.addUser(new User());
  }
}
