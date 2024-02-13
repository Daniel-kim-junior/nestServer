import { Injectable } from '@nestjs/common';
import User from './User';
import { Repository } from 'typeorm';

@Injectable()
export default class UserMysqlRepsitory extends Repository<User> {}
