import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { USER_METADATA_KEY } from '../../../auth/infrastructure';
import { Request } from 'express';
import { User, UserRoleName } from '../../domain';
import { Reflector } from '@nestjs/core';
import { ROLES_METADATA_KEY } from '../decorators';
import { intersection } from '../../../common/utils/intersection';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<Request>();
    const requiredRoles = this.reflector.getAllAndOverride<UserRoleName[]>(
      ROLES_METADATA_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles || requiredRoles.length === 0) return true;

    const user: User | null = Reflect.getMetadata(USER_METADATA_KEY, request);

    if (!user) return false;

    const rolesIntersection = intersection(requiredRoles, user.getRoleNames());

    return rolesIntersection.length === requiredRoles.length;
  }
}
