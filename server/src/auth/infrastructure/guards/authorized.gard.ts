import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request, CookieOptions } from 'express';
import { USER_METADATA_KEY } from '../decorators';
import { AuthSessionService } from '../../services';

const TOKEN_OPTIONS: CookieOptions = {
  httpOnly: true,
  secure: true,
};

export const ACCESS_TOKEN_OPTIONS: CookieOptions = {
  ...TOKEN_OPTIONS,
  path: '/',
  sameSite: 'none',
};

export const REFRESH_TOKEN_KEY = 'refresh_token';

export const ACCESS_TOKEN_KEY = 'access_token';

export const REFRESH_TOKEN_OPTIONS: CookieOptions = {
  ...TOKEN_OPTIONS,
  path: '/api/v1/auth/refresh',
  sameSite: 'none',
};

@Injectable()
export class AuthorizedGuard implements CanActivate {
  constructor(private readonly authSessionService: AuthSessionService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<Request>();
    const cookies = request.cookies || {};

    const accessToken = cookies[ACCESS_TOKEN_KEY];

    if (!accessToken) return false;

    const user =
      await this.authSessionService.getUserByAccessToken(accessToken);

    if (!user) return false;

    request.on('end', () => {
      Reflect.deleteMetadata(USER_METADATA_KEY, request);
    });

    Reflect.defineMetadata(USER_METADATA_KEY, user, request);
    return true;
  }
}
