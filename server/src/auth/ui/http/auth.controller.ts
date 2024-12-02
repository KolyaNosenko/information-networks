import { Body, Controller, Post } from '@nestjs/common';
import { LoginHandler, SignUpHandler, LogoutHandler } from '../../operation';
import { SignInDtoMapper } from './dto-mapper';
import { SignInDto, SignUpDto } from './dto';
import { SignUpToMapper } from './dto-mapper';
import { Login, Public } from '../../infrastructure';

@Controller('api/v1/auth')
export class AuthController {
  constructor(
    private loginHandler: LoginHandler,
    private signUpHandler: SignUpHandler,
    private logoutHandler: LogoutHandler,
  ) {}

  @Public()
  @Login()
  @Post('login')
  async signIn(@Body() dto: SignInDto) {
    const requestMapper = new SignInDtoMapper();

    return this.loginHandler.handle(requestMapper.toRequest(dto));
  }

  @Public()
  @Login()
  @Post('sign-up')
  async signUp(@Body() dto: SignUpDto) {
    const requestMapper = new SignUpToMapper();

    return this.signUpHandler.handle(requestMapper.toRequest(dto));
  }

  @Post('logout')
  async logout() {
    await this.logoutHandler.handle();
  }
}
