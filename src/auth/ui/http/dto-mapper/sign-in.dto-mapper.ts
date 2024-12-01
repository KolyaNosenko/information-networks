import { ToRequest } from '../../../../common/ui/dto-mappers';
import { LoginRequest } from '../../../operation';
import { SignInDto } from '../dto';

export class SignInDtoMapper implements ToRequest<LoginRequest, SignInDto> {
  toRequest(dto: SignInDto): LoginRequest {
    return {
      email: dto.email,
      password: dto.password,
    };
  }
}
