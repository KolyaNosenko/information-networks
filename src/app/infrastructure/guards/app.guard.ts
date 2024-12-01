import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import {
  AuthorizedGuard,
  PUBLIC_METADATA_KEY,
  PublicGuard,
} from '../../../auth/infrastructure';
import { Reflector } from '@nestjs/core';
import { ROLES_METADATA_KEY, RolesGuard } from '../../../user/infrastructure';
import { UserRoleName } from '../../../user/domain';

@Injectable()
export class AppGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly authorizedGuard: AuthorizedGuard,
    private readonly rolesGuard: RolesGuard,
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

    const isAuthorized = await this.authorizedGuard.canActivate(context);

    if (!isAuthorized) return false;

    const requiredRoles = this.reflector.getAllAndOverride<UserRoleName[]>(
      ROLES_METADATA_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (requiredRoles.length) {
      return this.rolesGuard.canActivate(context);
    }

    return true;
  }
}
