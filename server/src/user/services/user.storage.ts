import { User } from '../domain';

export interface UserStorage {
  createUser(user: User): Promise<User>;
  getUserByAccountId(accountId: string): Promise<User | null>;
  getUsers(): Promise<User[]>;
}
