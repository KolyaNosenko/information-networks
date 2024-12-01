import { UserStorage } from '../services';
import { User } from '../domain';
import { DatabaseService } from '../../common/database/services';
import { Injectable } from '@nestjs/common';
import { UserDbMapper } from './db-mapper';

@Injectable()
export class PrismaUserStorage implements UserStorage {
  constructor(private readonly db: DatabaseService) {}

  async createUser(user: User): Promise<User> {
    const dbMapper = new UserDbMapper();

    const userFromDb = await this.db.user.create({
      data: {
        id: user.getId(),
        name: user.getName(),
        createdAt: user.getCreateAt(),
        updatedAt: user.getUpdateAt(),
        account: { connect: { id: user.getAccountId() } },
      },
    });

    return dbMapper.toEntity(userFromDb);
  }

  async getUserByAccountId(accountId: string): Promise<User | null> {
    const dbMapper = new UserDbMapper();

    const userFromDb = await this.db.user.findUnique({ where: { accountId } });

    return userFromDb ? dbMapper.toEntity(userFromDb) : null;
  }
}
