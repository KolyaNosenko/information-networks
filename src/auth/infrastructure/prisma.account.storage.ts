import { AccountStorage } from '../services';
import { Account } from '../domain';
import { DatabaseService } from '../../common/database/services';
import { AccountDbMapper } from './db-mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaAccountStorage implements AccountStorage {
  constructor(private readonly db: DatabaseService) {}

  async createAccount(account: Account): Promise<Account> {
    const dbMapper = new AccountDbMapper();

    const accountFromDb = await this.db.account.create({
      data: {
        id: account.getId(),
        email: account.getEmail(),
        password: account.getPassword(),
        updatedAt: account.getUpdateAt(),
        createdAt: account.getCreateAt(),
      },
    });

    return dbMapper.toEntity(accountFromDb);
  }

  async getAccountByEmail(email: string): Promise<Account | null> {
    const dbMapper = new AccountDbMapper();

    const account = await this.db.account.findUnique({ where: { email } });

    return account ? dbMapper.toEntity(account) : null;
  }
}
