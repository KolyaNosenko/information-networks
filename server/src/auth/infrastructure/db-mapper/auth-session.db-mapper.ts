import Prisma from '../../../../prisma/prisma';
import { ToEntity } from '../../../common/database/db-mappers';
import { AuthSession } from '../../domain';

export class AuthSessionDbMapper
  implements ToEntity<AuthSession, Prisma.AuthSession>
{
  toEntity(db: Prisma.AuthSession): AuthSession {
    return new AuthSession({
      id: db.id,
      accountId: db.accountId,
      accessToken: db.accessToken,
      accessTokenExpiresAt: db.accessTokenExpiresAt,
      refreshToken: db.refreshToken,
      refreshTokenExpiresAt: db.refreshTokenExpiresAt,
      updatedAt: db.updatedAt,
      createdAt: db.createdAt,
    });
  }
}
