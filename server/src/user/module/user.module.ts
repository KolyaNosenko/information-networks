import { Module } from '@nestjs/common';
import { UserController } from '../ui';
import { UserService, UserStorage } from '../services';
import { PrismaUserStorage } from '../infrastructure';
import { RolesGuard } from '../infrastructure/guards';

@Module({
  controllers: [UserController],
  providers: [
    PrismaUserStorage,
    {
      provide: UserService,
      inject: [PrismaUserStorage],
      useFactory: (userStorage: UserStorage) => {
        return new UserService(userStorage);
      },
    },
    RolesGuard,
  ],
  exports: [RolesGuard, UserService],
})
export class UserModule {}
