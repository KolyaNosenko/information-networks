import Prisma from '@prisma/client';
import { ToEntity } from '../../../common/database/db-mappers';
import { User } from '../../domain';

export class UserDbMapper implements ToEntity<User, Prisma.User> {
  toEntity(db: Prisma.User): User {
    return new User({
      id: db.id,
      accountId: db.accountId,
      name: db.name,
      createdAt: db.createdAt,
      updatedAt: db.updatedAt,
    });
  }
}
