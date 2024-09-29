import { Controller, Get } from '@nestjs/common';
import { EventsService } from '../services';
import { SuccessResponse } from '../../common/ui/entities';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  async getEvents() {
    const events = await this.eventsService.getEvents();

    return new SuccessResponse(events);
  }
}
