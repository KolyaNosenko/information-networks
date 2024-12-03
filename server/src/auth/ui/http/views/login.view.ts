import { Injectable } from '@nestjs/common';
import { BaseView } from '../../../../common/ui/views';

@Injectable()
export class LoginView extends BaseView {
  getViewName(): string {
    return 'login';
  }
}
