import { CategoriesService } from '../../services';

export class GetCategoriesHandler {
  constructor(private readonly categoriesService: CategoriesService) {}

  async handle() {
    return this.categoriesService.getCategories();
  }
}
