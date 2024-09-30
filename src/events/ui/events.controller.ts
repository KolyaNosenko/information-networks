import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { EventsService } from '../services';
import { CreateEventDto } from './dto';
import { CreateEventDtoMapper } from './dto-mappers';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  async getEventsPage(@Res() response) {
    const events = await this.eventsService.getEvents();

    return response.render('home', { viewData: { events } });
  }

  @Get('create')
  async getCreateEventPage(@Res() response) {
    return response.render('create_event');
  }

  @Get('create/success')
  async getCreatEventSuccessPage(@Res() response) {
    return response.render('create_event_success');
  }

  @Post('create')
  async createEvent(@Body() dto: CreateEventDto, @Res() response) {
    const dtoMapper = new CreateEventDtoMapper();

    await this.eventsService.createEvent(dtoMapper.toEntity(dto));

    return response.redirect('create/success');
  }
}
