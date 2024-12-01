import { AuthService } from '../../services';
import { SignUpRequest } from '../requests';

export class SignUpHandler {
  constructor(private readonly authService: AuthService) {}

  async handle(request: SignUpRequest) {
    return this.authService.signUp(request);
  }
}
