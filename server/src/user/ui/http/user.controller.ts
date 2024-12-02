import { Controller, Get } from '@nestjs/common';
import { User } from '../../domain';
import { UserDtoMapper } from './dto-mappers';
import { SuccessResponse } from '../../../common/ui/entities';
import { CurrentUser } from '../../../auth/infrastructure';

@Controller('api/v1/users')
export class UserController {
  @Get('profile')
  async getUsers(@CurrentUser() user: User) {
    const dtoMapper = new UserDtoMapper();

    return new SuccessResponse(dtoMapper.toDto(user));
  }
}
