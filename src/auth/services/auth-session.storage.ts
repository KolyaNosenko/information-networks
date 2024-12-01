import { AuthSession } from '../domain';

export interface AuthSessionStorage {
  getSessionByAccessToken(accessToken: string): Promise<AuthSession | null>;
  createSession(authSession: AuthSession): Promise<AuthSession>;
}
