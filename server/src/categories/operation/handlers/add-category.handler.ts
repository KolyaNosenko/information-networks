import { CategoriesService } from '../../services';
import { AddCategoryParams } from '../../domain';

export class AddCategoryHandler {
  constructor(private readonly categoriesService: CategoriesService) {}

  async handle(params: AddCategoryParams) {
    return this.categoriesService.addCategory(params);
  }
}
