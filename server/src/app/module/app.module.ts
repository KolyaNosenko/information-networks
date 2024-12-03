import { Module, ValidationPipe } from '@nestjs/common';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { AppAdminController } from '../ui';
import { HealthModule } from 'src/health/module';
import { ConfigModule } from 'src/common/config/module';
import { PapersModule } from 'src/papers/module';
import { DatabaseModule } from 'src/common/database/module';
import { UserModule } from 'src/user/module';
import { AppGuard } from '../infrastructure';
import { AuthModule } from 'src/auth/module';
import { LibraryModule } from 'src/library/module';
import { CategoriesModule } from 'src/categories/module';

@Module({
  imports: [
    ConfigModule,
    HealthModule,
    DatabaseModule,
    AuthModule,
    UserModule,
    PapersModule,
    LibraryModule,
    CategoriesModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AppGuard,
    },
    {
      provide: APP_PIPE,
      useFactory: () =>
        new ValidationPipe({
          transform: true,
          forbidUnknownValues: false,
        }),
    },
  ],
  controllers: [AppAdminController],
})
export class AppModule {}
