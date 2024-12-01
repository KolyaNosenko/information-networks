import { Account } from '../domain';

export interface AccountStorage {
  createAccount(account: Account): Promise<Account>;
  getAccountByEmail(email: string): Promise<Account | null>;
}
