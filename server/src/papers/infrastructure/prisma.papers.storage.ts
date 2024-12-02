import { Paper } from '../entities';
import { PapersStorage } from '../services/interfaces';
import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../common/database/services';
import { PaperDbMapper } from './dto-mappers';

@Injectable()
export class PrismaPapersStorage implements PapersStorage {
  constructor(private readonly db: DatabaseService) {}

  async getPapers(): Promise<Paper[]> {
    const dbMapper = new PaperDbMapper();

    const papers = await this.db.paper.findMany();

    return papers.map(dbMapper.toEntity);
  }

  async addPaper(paper: Paper): Promise<void> {
    await this.db.paper.create({
      data: {
        id: paper.getId(),
        name: paper.getName(),
        coverUrl: paper.getCoverUrl(),
        author: paper.getAuthor(),
        createdAt: paper.getCreatedAt(),
        updatedAt: paper.getUpdatedAt(),
        description: paper.getDescription(),
        // TODO add
        // categories: [],
      },
    });
  }
}
