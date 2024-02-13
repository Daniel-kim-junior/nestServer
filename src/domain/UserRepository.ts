import User from './User';

export type UserRepository = {
  save(user: User): void;
};
