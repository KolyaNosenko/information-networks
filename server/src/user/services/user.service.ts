import { User } from '../domain';
import { UserStorage } from './user.storage';

export class UserService {
  constructor(private readonly userStorage: UserStorage) {}

  async createUser(user: User): Promise<User> {
    return this.userStorage.createUser(user);
  }

  async getUserByAccountId(accountId: string): Promise<User | null> {
    return this.userStorage.getUserByAccountId(accountId);
  }
}
