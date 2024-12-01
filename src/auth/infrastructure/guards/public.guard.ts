import { CanActivate, Injectable } from '@nestjs/common';

@Injectable()
export class PublicGuard implements CanActivate {
  async canActivate() {
    return true;
  }
}
