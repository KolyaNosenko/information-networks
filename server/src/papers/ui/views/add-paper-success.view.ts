import { BaseView } from '../../../common/ui/views';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddPaperSuccessView extends BaseView {
  getViewName(): string {
    return 'papers/add_paper_success';
  }
}
