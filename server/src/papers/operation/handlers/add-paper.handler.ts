import { PapersService } from '../../services';
import { AddPaperParams } from '../../entities';

export class AddPaperHandler {
  constructor(private readonly papersService: PapersService) {}

  async handle(params: AddPaperParams) {
    return this.papersService.addPaper(params);
  }
}
