import { User } from '../../user/domain';
import { AuthSessionStorage } from './auth-session.storage';
import { UserService } from '../../user/services';
import { AuthSession } from '../domain';
import { generateUuid } from '../../common/utils/string';
import { ConfigService } from '../../common/config/services';

export class AuthSessionService {
  constructor(
    private readonly authSessionStorage: AuthSessionStorage,
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  async getUserByAccessToken(accessToken: string): Promise<User | null> {
    const session =
      await this.authSessionStorage.getSessionByAccessToken(accessToken);

    if (!session || session.isExpired()) return null;

    return this.userService.getUserByAccountId(session.getAccountId());
  }

  async createNewSession(accountId: string) {
    const accessTokenExpiresAt = new Date(
      Date.now() + this.configService.auth.accessTokenLifetime,
    );
    const refreshTokenExpiresAt = new Date(
      Date.now() + this.configService.auth.refreshTokenLifetime,
    );

    const authSession = new AuthSession({
      id: generateUuid(),
      accountId: accountId,
      accessToken: generateUuid(),
      accessTokenExpiresAt,
      refreshToken: generateUuid(),
      refreshTokenExpiresAt,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return this.authSessionStorage.createSession(authSession);
  }
}
