import { CategoriesService } from '../../services';

export class GetCategoryHandler {
  constructor(private readonly categoriesService: CategoriesService) {}

  handle(categoryId: string) {
    return this.categoriesService.getCategory(categoryId);
  }
}
