import { Injectable } from '@nestjs/common';
import { BaseView } from 'src/common/ui/views';

@Injectable()
export class EditCategoryView extends BaseView {
  getViewName(): string {
    return 'categories/edit_category';
  }
}
