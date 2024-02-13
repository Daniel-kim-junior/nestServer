import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import Address from './Address';
import UserId from './UserId';
const DEFAULT_USER_ID: string = 'BEGINNER';
@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column((type) => Address)
  address: Address;

  @Column((type) => UserId)
  _userId: UserId;

  set userId(userId: UserId) {
    if (!userId.id) {
      this._userId = new UserId(DEFAULT_USER_ID);
    }
    this._userId = userId;
  }
}
