import { Injectable } from '@nestjs/common';
import { BaseView } from 'src/common/ui/views';

@Injectable()
export class CategoriesView extends BaseView {
  getViewName(): string {
    return 'categories/categories';
  }
}
