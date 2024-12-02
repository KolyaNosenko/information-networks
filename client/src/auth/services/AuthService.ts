import { BaseService } from '../../common/services';
import { LoginParams, SignUpParams } from '../entities';

export class AuthService extends BaseService {
  async login(params: LoginParams) {}

  async signUp(params: SignUpParams) {}
}
