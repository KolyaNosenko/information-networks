import { ToRequest } from '../../../../common/ui/dto-mappers';
import { SignUpRequest } from '../../../operation';
import { SignUpDto } from '../dto';

export class SignUpToMapper implements ToRequest<SignUpRequest, SignUpDto> {
  toRequest(dto: SignUpDto): SignUpRequest {
    return {
      name: dto.name,
      email: dto.email,
      password: dto.password,
    };
  }
}
