import { UserService } from '../../services';

export class GetUsersHandler {
  constructor(private readonly userService: UserService) {}

  handle() {
    return this.userService.getUsers();
  }
}
