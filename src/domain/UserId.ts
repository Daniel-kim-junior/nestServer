export default class UserId {
  constructor(private readonly userId: string) {}
  get id() {
    return this.userId;
  }
}
