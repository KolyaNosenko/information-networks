import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { EventsService } from '../services';
import { CreateEventDto } from './dto';
import { CreateEventDtoMapper } from './dto-mappers';
import { EventsView, CreateEventView, CreateEventSuccessView } from './views';

@Controller('events')
export class EventsController {
  constructor(
    private readonly eventsService: EventsService,
    private readonly eventsView: EventsView,
    private readonly createEventView: CreateEventView,
    private readonly createEventSuccessView: CreateEventSuccessView,
  ) {}

  @Get()
  async getEventsPage(@Res() response: Response) {
    const events = await this.eventsService.getEvents();

    return this.eventsView.render(response, { events });
  }

  @Get('create')
  async getCreateEventPage(@Res() response: Response) {
    return this.createEventView.render(response);
  }

  @Get('create/success')
  async getCreatEventSuccessPage(@Res() response: Response) {
    return this.createEventSuccessView.render(response);
  }

  @Post('create')
  async createEvent(@Body() dto: CreateEventDto, @Res() response: Response) {
    const dtoMapper = new CreateEventDtoMapper();

    await this.eventsService.createEvent(dtoMapper.toEntity(dto));

    return response.redirect('create/success');
  }
}
