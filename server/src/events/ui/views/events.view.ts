import { BaseView } from '../../../common/ui/views';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EventsView extends BaseView {
  getViewName(): string {
    return 'home';
  }
}
