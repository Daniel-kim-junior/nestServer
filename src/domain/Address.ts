import { Column } from 'typeorm';

export default class Address {
  @Column()
  si: string;
  @Column()
  guGoon: string;
  @Column()
  dongRo: string;
}
