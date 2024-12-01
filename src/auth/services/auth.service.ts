import * as argon from 'argon2';
import {
  Account,
  CreateAccountParams,
  InvalidAccountCredentials,
} from '../domain';
import { AccountStorage } from './account.storage';
import { generateUuid } from '../../common/utils/string';
import { UserService } from '../../user/services';
import { User } from '../../user/domain';

export class AuthService {
  constructor(
    private readonly accountStorage: AccountStorage,
    private readonly userService: UserService,
  ) {}

  async login(email: string, password: string): Promise<User> {
    const account = await this.accountStorage.getAccountByEmail(email);

    if (!account) throw new InvalidAccountCredentials();

    const isPasswordValid = await argon.verify(account.getPassword(), password);

    if (!isPasswordValid) throw new InvalidAccountCredentials();

    return this.userService.getUserByAccountId(account.getId());
  }

  async signUp(params: CreateAccountParams): Promise<User> {
    const existAccount = await this.accountStorage.getAccountByEmail(
      params.email,
    );

    if (existAccount) throw new InvalidAccountCredentials();

    const hashedPassword = await argon.hash(params.password);

    const accountId = generateUuid();
    const account = new Account({
      id: accountId,
      email: params.email,
      password: hashedPassword,
      updateAt: new Date(),
      createdAt: new Date(),
    });
    const user = new User({
      id: generateUuid(),
      accountId,
      name: params.name,
      createdAt: new Date(),
      updatedAt: new Date(),
      roles: [],
    });

    await this.accountStorage.createAccount(account);
    return this.userService.createUser(user);
  }

  async logout() {}
}
