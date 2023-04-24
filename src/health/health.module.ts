import { Module } from '@nestjs/common';
import { HealthController } from './health/health.controller';
import { HealthController } from './health.controller';

@Module({
  controllers: [HealthController]
})
export class HealthModule {}
