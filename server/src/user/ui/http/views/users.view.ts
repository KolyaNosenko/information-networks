import { Injectable } from '@nestjs/common';
import { BaseView } from '../../../../common/ui/views';

@Injectable()
export class UsersView extends BaseView {
  getViewName(): string {
    return 'users';
  }
}
