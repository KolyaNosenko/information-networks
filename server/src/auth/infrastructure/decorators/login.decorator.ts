import { UseInterceptors } from '@nestjs/common';
import { User } from '../../../user/domain';
import { LoginInterceptor } from '../interceptors';

export function Login() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: {
      value?: (...args: any[]) => Promise<User>;
    },
  ) {
    UseInterceptors(LoginInterceptor)(descriptor.value);
  };
}
