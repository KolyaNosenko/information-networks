import { Category } from '../domain';

export interface CategoriesStorage {
  getCategories(): Promise<Category[]>;
  getCategory(id: string): Promise<Category | null>;
  addCategory(category: Category): Promise<Category>;
  updateCategory(category: Category): Promise<Category>;
  removeCategory(id: string): Promise<void>;
}
