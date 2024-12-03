import { BaseView } from '../../../common/ui/views';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PapersView extends BaseView {
  getViewName(): string {
    return 'papers/papers';
  }
}
