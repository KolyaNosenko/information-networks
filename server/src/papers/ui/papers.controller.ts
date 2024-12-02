import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { PapersService } from '../services';
import { AddPaperDto } from './dto';
import { AddPaperDtoMapper } from './dto-mappers';
import { EventsView, CreateEventView, CreateEventSuccessView } from './views';

@Controller('papers')
export class PapersController {
  constructor(
    private readonly papersService: PapersService,
    private readonly eventsView: EventsView,
    private readonly createEventView: CreateEventView,
    private readonly createEventSuccessView: CreateEventSuccessView,
  ) {}

  @Get()
  async getPapersPage(@Res() response: Response) {
    const events = await this.papersService.getPapers();

    return this.eventsView.render(response, { events });
  }

  @Get('create')
  async getCreatePaperPage(@Res() response: Response) {
    return this.createEventView.render(response);
  }

  @Get('create/success')
  async getCreatPaperSuccessPage(@Res() response: Response) {
    return this.createEventSuccessView.render(response);
  }

  @Post('create')
  async addPaper(@Body() dto: AddPaperDto, @Res() response: Response) {
    const dtoMapper = new AddPaperDtoMapper();

    await this.papersService.addPaper(dtoMapper.toEntity(dto));

    return response.redirect('create/success');
  }
}
