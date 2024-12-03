import { Controller, Get } from '@nestjs/common';
import { SuccessResponse } from '../../common/ui/entities';
import { Public } from 'src/auth/infrastructure';

// TODO use global prefix after moving to API
@Public()
@Controller('api/v1/health')
export class HealthController {
  @Get()
  getIsAlive() {
    return new SuccessResponse();
  }
}
