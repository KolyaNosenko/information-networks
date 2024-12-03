import Prisma from '../../../../prisma/prisma';
import { ToEntity } from '../../../common/database/db-mappers';
import { User, UserRole, UserRoleName } from '../../domain';

export class UserDbMapper
  implements ToEntity<User, Prisma.User & { roles: Array<Prisma.Role> }>
{
  toEntity(db: Prisma.User & { roles: Array<Prisma.Role> }): User {
    const roles = db.roles.map((role) => this.roleToEntity.call(this, role));

    return new User({
      id: db.id,
      accountId: db.accountId,
      name: db.name,
      createdAt: db.createdAt,
      updatedAt: db.updatedAt,
      roles,
    });
  }

  private roleToEntity(db: Prisma.Role): UserRole {
    return new UserRole({ id: db.id, name: db.name as UserRoleName });
  }
}
