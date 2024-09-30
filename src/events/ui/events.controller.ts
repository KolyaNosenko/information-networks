import { Controller, Get, Res } from '@nestjs/common';
import { EventsService } from '../services';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  async eventsPage(@Res() response) {
    const events = await this.eventsService.getEvents();

    return response.render('home', { viewData: { events } });
  }

  @Get('create')
  async createEventPage(@Res() response) {
    return response.render('create-event');
  }
}
