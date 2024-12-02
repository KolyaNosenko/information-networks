import { ToDto } from '../../../../common/ui/dto-mappers';
import { UserRole } from '../../../domain';
import { UserRoleDto } from '../dto';

export class UserRoleDtoMapper implements ToDto<UserRole, UserRoleDto> {
  toDto(entity: UserRole): UserRoleDto {
    return {
      id: entity.getId(),
      name: entity.getName(),
    };
  }
}
