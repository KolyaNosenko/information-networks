import { Controller, Get, Res } from '@nestjs/common';
import { Roles } from '../../infrastructure';
import { UserRoleName } from '../../domain';
import { GetUsersHandler } from '../../operation';
import { UserDtoMapper } from './dto-mappers';
import { Response } from 'express';
import { UsersView } from './views';

@Roles([UserRoleName.ADMIN])
@Controller('admin/users')
export class UserAdminController {
  constructor(
    private readonly getUsersHandler: GetUsersHandler,
    private readonly usersView: UsersView,
  ) {}

  @Get()
  async getUsersPage(@Res() response: Response) {
    const dtoMapper = new UserDtoMapper();

    const users = await this.getUsersHandler.handle();

    return this.usersView.render(response, {
      users: users.map(dtoMapper.toDto.bind(dtoMapper)),
    });
  }
}
