import { Paper } from '../entities';
import { PapersStorage } from '../services/interfaces';
import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../common/database/services';
import { PaperDbMapper } from './db-mappers';

@Injectable()
export class PrismaPapersStorage implements PapersStorage {
  constructor(private readonly db: DatabaseService) {}

  async getPapers(): Promise<Paper[]> {
    const dbMapper = new PaperDbMapper();

    const papers = await this.db.paper.findMany();

    return papers.map(dbMapper.toEntity);
  }

  async addPaper(paper: Paper): Promise<Paper> {
    const dbMapper = new PaperDbMapper();

    const paperFromDb = await this.db.paper.create({
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

    return dbMapper.toEntity(paperFromDb);
  }

  async updatePaper(paper: Paper): Promise<Paper> {
    const dbMapper = new PaperDbMapper();

    const paperFromDb = await this.db.paper.update({
      where: { id: paper.getId() },
      data: {
        name: paper.getName(),
        coverUrl: paper.getCoverUrl(),
        author: paper.getAuthor(),
        updatedAt: paper.getUpdatedAt(),
        description: paper.getDescription(),
        // TODO add
        // categories: [],
      },
    });

    return paperFromDb ? dbMapper.toEntity(paperFromDb) : null;
  }

  async getPaperById(id: string): Promise<Paper | null> {
    const dbMapper = new PaperDbMapper();

    const paperFromDb = await this.db.paper.findUnique({ where: { id } });

    return paperFromDb ? dbMapper.toEntity(paperFromDb) : null;
  }
}
