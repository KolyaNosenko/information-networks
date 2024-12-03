import { Injectable } from '@nestjs/common';
import { BaseView } from 'src/common/ui/views';

@Injectable()
export class AddCategoryView extends BaseView {
  getViewName(): string {
    return 'categories/add_category';
  }
}
