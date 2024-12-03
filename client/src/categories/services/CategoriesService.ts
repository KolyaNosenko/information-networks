import { BaseService } from '../../common/services';
import { Category } from '../entities';
import { CategoryDto } from './dto';

export class CategoriesService extends BaseService {
  async getCategories(): Promise<Category[]> {
    const { data } = await this.http.get<CategoryDto[]>('api/v1/categories');

    return data;
  }
}
