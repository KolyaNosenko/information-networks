import { BaseView } from '../../../common/ui/views';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddPaperView extends BaseView {
  getViewName(): string {
    return 'papers/add_paper';
  }
}
