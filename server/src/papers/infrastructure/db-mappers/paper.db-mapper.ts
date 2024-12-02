import { ToEntity } from '../../../common/database/db-mappers';
import Prisma from '../../../../prisma/prisma';
import { Paper } from '../../entities';

export class PaperDbMapper implements ToEntity<Paper, Prisma.Paper> {
  toEntity(db: Prisma.Paper): Paper {
    return new Paper({
      id: db.id,
      name: db.name,
      description: db.description,
      coverUrl: db.coverUrl,
      author: db.author,
      updatedAt: db.updatedAt,
      createdAt: db.createdAt,
    });
  }
}
