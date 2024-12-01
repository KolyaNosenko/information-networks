import { AuthService } from '../../services';

export class LogoutHandler {
  constructor(private readonly authService: AuthService) {}

  handle() {
    return this.authService.logout();
  }
}
