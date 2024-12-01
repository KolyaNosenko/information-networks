import { AuthSessionStorage } from '../services';
import { AuthSession } from '../domain';
import { DatabaseService } from '../../common/database/services';
import { AuthSessionDbMapper } from './db-mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaAuthSessionStorage implements AuthSessionStorage {
  constructor(private readonly db: DatabaseService) {}

  async getSessionByAccessToken(
    accessToken: string,
  ): Promise<AuthSession | null> {
    const dbMapper = new AuthSessionDbMapper();

    const sessionFromDb = await this.db.authSession.findUnique({
      where: { accessToken },
    });

    return sessionFromDb ? dbMapper.toEntity(sessionFromDb) : null;
  }

  async createSession(authSession: AuthSession) {
    const dbMapper = new AuthSessionDbMapper();

    const sessionFromDb = await this.db.authSession.create({
      data: {
        id: authSession.getId(),
        accountId: authSession.getAccountId(),
        accessToken: authSession.getAccessToken(),
        accessTokenExpiresAt: authSession.getAccessTokenExpiresAt(),
        refreshToken: authSession.getRefreshToken(),
        refreshTokenExpiresAt: authSession.getRefreshTokenExpiresAt(),
        createdAt: authSession.getCreatedAt(),
        updatedAt: authSession.getUpdatedAt(),
      },
    });

    return dbMapper.toEntity(sessionFromDb);
  }
}
