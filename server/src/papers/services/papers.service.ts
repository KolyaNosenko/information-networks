import { PapersStorage } from './interfaces';
import {
  AddPaperParams,
  Paper,
  PaperNotFoundError,
  UpdatePaperParams,
} from '../entities';
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

  async updatePaper(params: UpdatePaperParams) {
    const paper = await this.papersStorage.getPaperById(params.paperId);

    if (!paper) throw new PaperNotFoundError();

    if (params.name) {
      paper.setName(params.name);
    }

    if (params.coverUrl) {
      paper.setCoverUrl(params.coverUrl);
    }

    if (params.author) {
      paper.setAuthor(params.author);
    }

    if (params.description) {
      paper.setDescription(params.description);
    }

    paper.setUpdatedAt(new Date());

    return this.papersStorage.updatePaper(paper);
  }

  getPaperById(id: string) {
    return this.papersStorage.getPaperById(id);
  }
}
