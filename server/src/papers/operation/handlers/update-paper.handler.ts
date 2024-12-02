import { Paper, UpdatePaperParams } from '../../entities';
import { PapersService } from '../../services';

export class UpdatePaperHandler {
  constructor(private readonly papersService: PapersService) {}

  async handle(params: UpdatePaperParams): Promise<Paper> {
    return this.papersService.updatePaper(params);
  }
}
