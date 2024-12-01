import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const USER_METADATA_KEY = Symbol('User');

export const getCurrentUser = (request: Request) =>
  Reflect.getMetadata(USER_METADATA_KEY, request);

export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    return getCurrentUser(request);
  },
);
