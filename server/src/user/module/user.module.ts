import { Module } from '@nestjs/common';
import { UserAdminController, UserController } from '../ui';
import { UserService, UserStorage } from '../services';
import { PrismaUserStorage, RolesGuard } from '../infrastructure';
import { GetUsersHandler } from '../operation';
import { UsersView } from '../ui';

@Module({
  controllers: [UserAdminController, UserController],
  providers: [
    PrismaUserStorage,
    UsersView,
    {
      provide: UserService,
      inject: [PrismaUserStorage],
      useFactory: (userStorage: UserStorage) => {
        return new UserService(userStorage);
      },
    },
    {
      provide: GetUsersHandler,
      inject: [UserService],
      useFactory: (userService: UserService) => {
        return new GetUsersHandler(userService);
      },
    },
    RolesGuard,
  ],
  exports: [RolesGuard, UserService],
})
export class UserModule {}
