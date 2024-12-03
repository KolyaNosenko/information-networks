import { ToDto } from '../../../../common/ui/dto-mappers';
import { User } from '../../../domain';
import { UserDto } from '../dto';
import { UserRoleDtoMapper } from './user-role.dto-mapper';

export class UserDtoMapper implements ToDto<User, UserDto> {
  toDto(entity: User): UserDto {
    const userRoleDtoMapper = new UserRoleDtoMapper();

    return {
      id: entity.getId(),
      account_id: entity.getAccountId(),
      name: entity.getName(),
      roles: entity
        .getRoles()
        .map(userRoleDtoMapper.toDto.bind(userRoleDtoMapper)),
      created_at: entity.getCreateAt().getTime(),
      updated_at: entity.getUpdateAt().getTime(),
    };
  }
}
