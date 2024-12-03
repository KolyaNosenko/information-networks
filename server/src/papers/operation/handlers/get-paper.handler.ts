import { PapersService } from '../../services';

export class GetPaperHandler {
  constructor(private readonly papersService: PapersService) {}

  async handle(paperId: string) {
    return this.papersService.getPaperById(paperId);
  }
}
