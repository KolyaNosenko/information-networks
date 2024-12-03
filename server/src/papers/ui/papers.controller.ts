import { Controller, Get } from '@nestjs/common';
import { PapersService } from '../services';
import { PaperDtoMapper } from './dto-mappers';
import { PapersView, AddPaperView, AddPaperSuccessView } from './views';
import { GetPapersHandler } from '../operation';
import { SuccessResponse } from '../../common/ui/entities';
import { Public } from 'src/auth/infrastructure';

@Controller('api/v1/papers')
export class PapersController {
  constructor(
    private readonly papersService: PapersService,
    private readonly eventsView: PapersView,
    private readonly createEventView: AddPaperView,
    private readonly createEventSuccessView: AddPaperSuccessView,
    private readonly getPapersHandler: GetPapersHandler,
  ) {}

  @Public()
  @Get()
  async getPapers() {
    const dtoMapper = new PaperDtoMapper();

    const papers = await this.getPapersHandler.handle();

    return new SuccessResponse(papers.map(dtoMapper.toDto));
  }
}
