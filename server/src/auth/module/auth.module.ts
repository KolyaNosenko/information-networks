import { Module } from '@nestjs/common';
import {
  AccountStorage,
  AuthService,
  AuthSessionService,
  AuthSessionStorage,
} from '../services';
import { LoginHandler, LogoutHandler, SignUpHandler } from '../operation';
import { AuthController, AuthAdminController, LoginView } from '../ui';
import {
  PrismaAccountStorage,
  AuthorizedGuard,
  PrismaAuthSessionStorage,
  PublicGuard,
} from '../infrastructure';
import { UserModule } from '../../user/module';
import { UserService } from '../../user/services';
import { ConfigService } from '../../common/config/services';

@Module({
  imports: [UserModule],
  controllers: [AuthController, AuthAdminController],
  providers: [
    LoginView,
    PrismaAccountStorage,
    PrismaAuthSessionStorage,
    {
      provide: AuthSessionService,
      inject: [PrismaAuthSessionStorage, UserService, ConfigService],
      useFactory: (
        authSessionStorage: AuthSessionStorage,
        userService: UserService,
        configService: ConfigService,
      ) => {
        return new AuthSessionService(
          authSessionStorage,
          userService,
          configService,
        );
      },
    },
    {
      provide: AuthService,
      inject: [PrismaAccountStorage, UserService],
      useFactory: (
        accountStorage: AccountStorage,
        userService: UserService,
      ) => {
        return new AuthService(accountStorage, userService);
      },
    },
    {
      provide: LoginHandler,
      inject: [AuthService],
      useFactory: (authService: AuthService) => {
        return new LoginHandler(authService);
      },
    },
    {
      provide: SignUpHandler,
      inject: [AuthService],
      useFactory: (authService: AuthService) => {
        return new SignUpHandler(authService);
      },
    },
    {
      provide: LogoutHandler,
      inject: [AuthService],
      useFactory: (authService: AuthService) => {
        return new LogoutHandler(authService);
      },
    },
    {
      provide: AuthorizedGuard,
      inject: [AuthSessionService],
      useFactory: (authSessionService: AuthSessionService) => {
        return new AuthorizedGuard(authSessionService);
      },
    },
    {
      provide: PublicGuard,
      inject: [],
      useFactory: () => {
        return new PublicGuard();
      },
    },
  ],
  exports: [AuthorizedGuard, PublicGuard, AuthService, AuthSessionService],
})
export class AuthModule {}
