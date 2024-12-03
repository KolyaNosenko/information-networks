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

    const roles = user.getRoles().map((role) => ({ id: role.getId() }));

    const userFromDb = await this.db.user.create({
      data: {
        id: user.getId(),
        name: user.getName(),
        createdAt: user.getCreateAt(),
        updatedAt: user.getUpdateAt(),
        account: { connect: { id: user.getAccountId() } },
        roles: { connect: roles },
      },
      include: { roles: true },
    });

    return dbMapper.toEntity.call(dbMapper, userFromDb);
  }

  async getUserByAccountId(accountId: string): Promise<User | null> {
    const dbMapper = new UserDbMapper();

    const userFromDb = await this.db.user.findUnique({
      where: { accountId },
      include: { roles: true },
    });

    return userFromDb ? dbMapper.toEntity.call(dbMapper, userFromDb) : null;
  }

  async getUsers(): Promise<User[]> {
    const dbMapper = new UserDbMapper();

    const usersFromDb = await this.db.user.findMany({
      include: { roles: true },
    });

    return usersFromDb.map(dbMapper.toEntity.bind(dbMapper));
  }
}
