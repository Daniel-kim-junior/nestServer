import { Injectable } from '@nestjs/common';
import User from './User';
import { UserService } from './UserService';
import UserId from './UserId';
import Address from './Address';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import UserMysqlRepsitory from './UserMysqlRepository';

@Injectable()
export default class UserServiceImpl implements UserService {
  constructor(
    @InjectRepository(UserMysqlRepsitory)
    private readonly userRepository: Repository<User>,
  ) {}

  async addUser(user: User) {
    user.userId = new UserId('nameme');
    user.name = 'name';
    user.address = new Address();
    return await this.userRepository.save(user);
  }
}
