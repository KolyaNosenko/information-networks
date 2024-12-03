import { Controller, Get } from '@nestjs/common';
import { PapersService } from '../services';
import { PaperDtoMapper } from './dto-mappers';
import { EventsView, CreateEventView, CreateEventSuccessView } from './views';
import { GetPapersHandler } from '../operation';
import { SuccessResponse } from '../../common/ui/entities';

@Controller('api/v1/papers')
export class PapersController {
  constructor(
    private readonly papersService: PapersService,
    private readonly eventsView: EventsView,
    private readonly createEventView: CreateEventView,
    private readonly createEventSuccessView: CreateEventSuccessView,
    private readonly getPapersHandler: GetPapersHandler,
  ) {}

  @Get()
  async getPapers() {
    const dtoMapper = new PaperDtoMapper();

    const papers = await this.getPapersHandler.handle();

    return new SuccessResponse(papers.map(dtoMapper.toDto));
  }
}
