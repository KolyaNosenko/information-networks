import { CategoriesStorage } from './categories.storage';
import {
  AddCategoryParams,
  Category,
  CategoryNotFound,
  UpdateCategoryParams,
} from '../domain';
import { generateUuid } from '../../common/utils/string';

export class CategoriesService {
  constructor(private readonly categoriesStorage: CategoriesStorage) {}

  async getCategories() {
    return this.categoriesStorage.getCategories();
  }

  async getCategory(categoryId: string) {
    return this.categoriesStorage.getCategory(categoryId);
  }

  async addCategory(params: AddCategoryParams) {
    const category = new Category({
      id: generateUuid(),
      name: params.name,
      updatedAt: new Date(),
      createdAt: new Date(),
    });

    return this.categoriesStorage.addCategory(category);
  }

  async updateCategory(params: UpdateCategoryParams) {
    const category = await this.categoriesStorage.getCategory(params.id);

    if (!category) throw new CategoryNotFound();

    if ('name' in params) {
      category.setName(params.name);
    }

    category.setUpdatedAt(new Date());

    return this.categoriesStorage.updateCategory(category);
  }

  async removeCategory(id: string) {
    return this.categoriesStorage.removeCategory(id);
  }
}
