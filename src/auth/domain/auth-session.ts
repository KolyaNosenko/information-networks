type AuthSessionProperties = {
  id: string;
  accountId: string;
  accessToken: string;
  accessTokenExpiresAt: Date;
  refreshToken: string;
  refreshTokenExpiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
};

export class AuthSession {
  constructor(private readonly properties: AuthSessionProperties) {}

  getId() {
    return this.properties.id;
  }

  getAccountId(): string {
    return this.properties.accountId;
  }

  getAccessToken() {
    return this.properties.accessToken;
  }

  getAccessTokenExpiresAt() {
    return this.properties.accessTokenExpiresAt;
  }

  getAccessTokenExpiresAtInMs() {
    return this.properties.accessTokenExpiresAt.getTime();
  }

  getRefreshToken() {
    return this.properties.refreshToken;
  }

  getRefreshTokenExpiresAt() {
    return this.properties.refreshTokenExpiresAt;
  }

  getRefreshTokenExpiresAtInMs() {
    return this.properties.refreshTokenExpiresAt.getTime();
  }

  isExpired() {
    return this.getAccessTokenExpiresAtInMs() <= Date.now();
  }

  getCreatedAt() {
    return this.properties.createdAt;
  }

  getUpdatedAt() {
    return this.properties.updatedAt;
  }
}
