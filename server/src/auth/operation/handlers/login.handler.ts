import { AuthService } from '../../services';
import { LoginRequest } from '../requests';

export class LoginHandler {
  constructor(private readonly authService: AuthService) {}

  async handle(request: LoginRequest) {
    return this.authService.login(request.email, request.password);
  }
}
