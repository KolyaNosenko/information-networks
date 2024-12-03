import { CategoriesService } from '../../services';

export class RemoveCategoryHandler {
  constructor(private readonly categoriesService: CategoriesService) {}

  handle(id: string) {
    return this.categoriesService.removeCategory(id);
  }
}
