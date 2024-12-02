import { BaseService, PersistentStorage } from '../../common/services';
import { LoginParams, SignUpParams } from '../entities';
import { AuthenticatedSessionDto } from './dto';
import { HttpClientWithSessionRefresh } from './HttpClientWithSessionRefresh.ts';
import { ApiError } from '../../common/errors';

export class AuthService extends BaseService {
  readonly refreshTokenExpireAtKey = 'refresh_token_expires_at';

  private unauthorizedListeners: Array<(reason: ApiError) => void> = [];

  constructor(
    protected readonly httpClient: HttpClientWithSessionRefresh,
    private readonly persistentStorage: PersistentStorage,
  ) {
    super(httpClient);

    httpClient.onSessionRefreshFailed(
      this.handleSessionRefreshFailed.bind(this),
    );
    httpClient.onSessionRefreshed(this.handleSessionRefreshed.bind(this));
  }

  get isAuthorized(): boolean {
    return !this.isRefreshTokenExpired();
  }

  onUnauthorized(listener: (reason: ApiError) => void) {
    this.unauthorizedListeners.push(listener);
  }

  async login(params: LoginParams) {
    const { data } = await this.http.post<AuthenticatedSessionDto>(
      'api/v1/auth/login',
      {
        data: {
          email: params.email,
          password: params.password,
        },
      },
    );

    this.storeTokenExpiration(data.refresh_expires_at);
  }

  async signUp(params: SignUpParams) {
    const { data } = await this.http.post<AuthenticatedSessionDto>(
      'api/v1/auth/sign-up',
      {
        data: {
          email: params.email,
          password: params.password,
          name: params.name,
        },
      },
    );

    this.storeTokenExpiration(data.refresh_expires_at);
  }

  async logout() {
    await this.http.post('api/v1/auth/logout');
  }

  private handleSessionRefreshed(session: AuthenticatedSessionDto) {
    const { refresh_expires_at } = session;

    this.storeTokenExpiration(refresh_expires_at);
  }

  private isRefreshTokenExpired(): boolean {
    return this.getStoredTokenExpiration() < Date.now();
  }

  private getStoredTokenExpiration() {
    const expireAtRaw =
      this.persistentStorage.get<string>(this.refreshTokenExpireAtKey) || '0';
    const expireAt = parseFloat(expireAtRaw);
    return Number.isNaN(expireAt) ? 0 : expireAt;
  }

  private storeTokenExpiration(expiredAt: number) {
    this.persistentStorage.set(
      this.refreshTokenExpireAtKey,
      expiredAt.toString(),
    );
  }

  private handleSessionRefreshFailed(reason: ApiError) {
    this.resetAuthorizationState();
    this.notifyUnauthorizedListeners(reason);
  }

  private notifyUnauthorizedListeners(reason: ApiError) {
    this.unauthorizedListeners.forEach((listener) => {
      try {
        listener(reason);
      } catch (err) {
        console.error(err);
      }
    });
  }

  private resetAuthorizationState() {
    this.persistentStorage.set(this.refreshTokenExpireAtKey, '0');
  }
}
