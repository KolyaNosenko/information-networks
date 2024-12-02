import { Controller, Get } from '@nestjs/common';
import { Roles } from '../../infrastructure';
import { UserRoleName } from '../../domain';
import { GetUsersHandler } from '../../operation';
import { UserDtoMapper } from './dto-mappers';
import { SuccessResponse } from '../../../common/ui/entities';

@Roles([UserRoleName.ADMIN])
@Controller('api/v1/admin/users')
export class UserAdminController {
  constructor(private readonly getUsersHandler: GetUsersHandler) {}

  @Get()
  async getUsers() {
    const dtoMapper = new UserDtoMapper();

    const users = await this.getUsersHandler.handle();

    return new SuccessResponse(users.map(dtoMapper.toDto));
  }
}
