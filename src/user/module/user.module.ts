import { Module } from '@nestjs/common';
import { UserController } from '../ui';
import { UserService, UserStorage } from '../services';
import { PrismaUserStorage } from '../infrastructure';

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
  ],
  exports: [UserService],
})
export class UserModule {}
