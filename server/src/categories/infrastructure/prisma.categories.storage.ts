import { Category } from '../domain';
import { CategoriesStorage } from '../services';
import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../common/database/services';
import { CategoryDbMapper } from './db-mappers';

@Injectable()
export class PrismaCategoriesStorage implements CategoriesStorage {
  constructor(private readonly db: DatabaseService) {}

  async getCategories(): Promise<Category[]> {
    const dbMapper = new CategoryDbMapper();

    const categoriesFromDb = await this.db.category.findMany();

    return categoriesFromDb.map(dbMapper.toEntity.bind(dbMapper));
  }

  async getCategory(id: string): Promise<Category | null> {
    const dbMapper = new CategoryDbMapper();

    const categoryFromDb = await this.db.category.findUnique({
      where: { id },
    });

    return categoryFromDb
      ? dbMapper.toEntity.call(dbMapper, categoryFromDb)
      : null;
  }

  async addCategory(category: Category) {
    const dbMapper = new CategoryDbMapper();

    const categoryFromDb = await this.db.category.create({
      data: {
        id: category.getId(),
        name: category.getName(),
        updatedAt: category.getUpdatedAt(),
        createdAt: category.getCreatedAt(),
      },
    });

    return dbMapper.toEntity.call(dbMapper, categoryFromDb);
  }

  async updateCategory(category: Category) {
    const dbMapper = new CategoryDbMapper();

    const categoryFromDb = await this.db.category.update({
      where: { id: category.getId() },
      data: {
        name: category.getName(),
        updatedAt: category.getUpdatedAt(),
      },
    });

    return dbMapper.toEntity.call(dbMapper, categoryFromDb);
  }

  async removeCategory(id: string) {
    await this.db.category.delete({ where: { id } });
  }
}
