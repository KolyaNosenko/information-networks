import { ToEntity } from '../../../common/database/db-mappers';
import { Category } from '../../domain';
import Prisma from '../../../../prisma/prisma';

export class CategoryDbMapper implements ToEntity<Category, Prisma.Category> {
  toEntity(db: Prisma.Category): Category {
    return new Category({
      id: db.id,
      name: db.name,
      updatedAt: db.updatedAt,
      createdAt: db.createdAt,
    });
  }
}
