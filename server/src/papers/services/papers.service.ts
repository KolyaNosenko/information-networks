import { PapersStorage } from './interfaces';
import { AddPaperParams, Paper } from '../entities';
import { generateUuid } from '../../common/utils/string';

export class PapersService {
  constructor(private readonly papersStorage: PapersStorage) {}

  async getPapers() {
    return this.papersStorage.getPapers();
  }

  async addPaper(data: AddPaperParams) {
    const paper = new Paper({
      id: generateUuid(),
      name: data.name,
      description: data.description,
      coverUrl: data.coverUrl,
      author: data.author,
      updatedAt: new Date(),
      createdAt: new Date(),
    });

    return this.papersStorage.addPaper(paper);
  }
}
