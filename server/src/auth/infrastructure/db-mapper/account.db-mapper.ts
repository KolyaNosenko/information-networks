import { ToEntity } from '../../../common/database/db-mappers';
import { Account } from '../../domain';
import { Account as AccountFromDb } from '../../../../prisma/prisma';

export class AccountDbMapper implements ToEntity<Account, AccountFromDb> {
  toEntity(db: AccountFromDb): Account {
    return new Account({
      id: db.id,
      email: db.email,
      password: db.password,
      updateAt: db.updatedAt,
      createdAt: db.createdAt,
    });
  }
}
