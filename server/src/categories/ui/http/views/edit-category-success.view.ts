import { BaseView } from 'src/common/ui/views';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EditCategorySuccessView extends BaseView {
  getViewName(): string {
    return 'categories/edit_category_success';
  }
}
