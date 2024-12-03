import { PapersService } from '../../services';

export class GetPapersHandler {
  constructor(private readonly papersService: PapersService) {}

  async handle() {
    return this.papersService.getPapers();
  }
}
