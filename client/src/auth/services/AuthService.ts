import { BaseService } from '../../common/services';
import { LoginParams, SignUpParams } from '../entities';

export class AuthService extends BaseService {
  async login(params: LoginParams) {
    await this.http.post('api/v1/auth/login', {
      data: {
        email: params.email,
        password: params.password,
      },
    });
  }

  async signUp(params: SignUpParams) {
    await this.http.post('api/v1/auth/sign-up', {
      data: {
        email: params.email,
        password: params.password,
        name: params.name,
      },
    });
  }

  async logout() {
    await this.http.post('api/v1/auth/logout');
  }
}
