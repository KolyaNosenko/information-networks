import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HealthModule } from './health/module';
import { ConfigModule } from './common/config/module';
import { EventsModule } from './events/module';
import { DatabaseModule } from './common/database/module';

@Module({
  imports: [ConfigModule, HealthModule, DatabaseModule, EventsModule],
  controllers: [AppController],
})
export class AppModule {}
