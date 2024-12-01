import { SetMetadata } from '@nestjs/common';
import { UserRoleName } from '../../domain';

export const ROLES_METADATA_KEY = Symbol('Public');

export const Roles = (roles: Array<UserRoleName>) =>
  SetMetadata(ROLES_METADATA_KEY, roles);
