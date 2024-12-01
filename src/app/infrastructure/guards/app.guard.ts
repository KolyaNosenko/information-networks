import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import {
  AuthorizedGuard,
  PUBLIC_METADATA_KEY,
  PublicGuard,
} from '../../../auth/infrastructure';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AppGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly authorizedGuard: AuthorizedGuard,
    private readonly publicGuard: PublicGuard,
  ) {}

  async canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(
      PUBLIC_METADATA_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (isPublic) {
      return this.publicGuard.canActivate();
    }

    return this.authorizedGuard.canActivate(context);
  }
}
