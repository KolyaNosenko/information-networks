import { Response } from 'express';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { firstValueFrom, of } from 'rxjs';
import {
  ACCESS_TOKEN_KEY,
  ACCESS_TOKEN_OPTIONS,
  REFRESH_TOKEN_KEY,
  REFRESH_TOKEN_OPTIONS,
} from '../guards';
import { SuccessResponse } from '../../../common/ui/entities';
import { AuthSessionService } from '../../services';
import { User } from '../../../user/domain';

@Injectable()
export class LoginInterceptor implements NestInterceptor {
  constructor(private authSessionService: AuthSessionService) {}

  async intercept(context: ExecutionContext, next: CallHandler<any>) {
    const response = context.switchToHttp().getResponse<Response>();
    const user: User = await firstValueFrom(next.handle());

    const session = await this.authSessionService.createNewSession(
      user.getAccountId(),
    );

    response.cookie(REFRESH_TOKEN_KEY, session.getRefreshToken(), {
      ...REFRESH_TOKEN_OPTIONS,
      expires: session.getRefreshTokenExpiresAt(),
    });
    response.cookie(ACCESS_TOKEN_KEY, session.getAccessToken(), {
      ...ACCESS_TOKEN_OPTIONS,
      expires: session.getAccessTokenExpiresAt(),
    });

    return of(
      new SuccessResponse({
        access_expires_at: session.getAccessTokenExpiresAtInMs(),
        refresh_expires_at: session.getRefreshTokenExpiresAtInMs(),
        user: {
          id: user.getId(),
        },
      }),
    );
  }
}
