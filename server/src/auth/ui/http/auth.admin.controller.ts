import { Body, Controller, Get, Post, Redirect, Res } from "@nestjs/common";
import { Response } from 'express';
import { LoginView } from './views';
import { Login, Public } from 'src/auth/infrastructure';
import { LoginHandler } from '../../operation';
import { SignInDto } from './dto';
import { SignInDtoMapper } from './dto-mapper';

@Public()
@Controller('admin/auth')
export class AuthAdminController {
  constructor(
    private readonly loginView: LoginView,
    private readonly loginHandler: LoginHandler,
  ) {}

  @Get()
  async getRootPage(@Res() response: Response) {
    return response.redirect('/admin/auth/login');
  }

  @Get('login')
  async getLoginPage(@Res() response: Response) {
    return this.loginView.render(response);
  }

  @Login()
  @Redirect('/admin/papers')
  @Post('login')
  async login(@Body() dto: SignInDto) {
    const requestMapper = new SignInDtoMapper();

    return this.loginHandler.handle(requestMapper.toRequest(dto));
  }
}
