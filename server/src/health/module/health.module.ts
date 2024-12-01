import { Module } from '@nestjs/common';
import { HealthController } from '../ui';

@Module({
  controllers: [HealthController],
})
export class HealthModule {}
