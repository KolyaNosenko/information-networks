import { Injectable } from '@nestjs/common';
import { BaseView } from 'src/common/ui/views';

@Injectable()
export class AddCategorySuccessView extends BaseView {
  getViewName(): string {
    return 'categories/add_category_success';
  }
}
