import { IsString } from 'class-validator';

export class SignUpDto {
  @IsString()
  name: string;

  @IsString()
  email: string;
  // TODO add password validation
  @IsString()
  password: string;
}
