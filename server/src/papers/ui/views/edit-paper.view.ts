import { BaseView } from '../../../common/ui/views';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EditPaperView extends BaseView {
  getViewName(): string {
    return 'papers/edit_paper';
  }
}
