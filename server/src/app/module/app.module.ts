import { Module, ValidationPipe } from '@nestjs/common';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { AppController } from '../ui';
import { HealthModule } from '../../health/module';
import { ConfigModule } from '../../common/config/module';
import { PapersModule } from '../../papers/module';
import { DatabaseModule } from '../../common/database/module';
import { UserModule } from '../../user/module';
import { AppGuard } from '../infrastructure';
import { AuthModule } from '../../auth/module';
import { LibraryModule } from '../../library/module';

@Module({
  imports: [
    ConfigModule,
    HealthModule,
    DatabaseModule,
    AuthModule,
    UserModule,
    PapersModule,
    LibraryModule,
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
  controllers: [AppController],
})
export class AppModule {}
