import { CategoriesService } from '../../services';
import { UpdateCategoryParams } from '../../domain';

export class UpdateCategoryHandler {
  constructor(private readonly categoriesService: CategoriesService) {}

  async handle(params: UpdateCategoryParams) {
    return this.categoriesService.updateCategory(params);
  }
}
