import { Controller, Get } from '@nestjs/common';
import { SuccessResponse } from '../../common/ui/entities';

// TODO use global prefix after moving to API
@Controller('api/v1/health')
export class HealthController {
  @Get()
  getIsAlive() {
    return new SuccessResponse();
  }
}
