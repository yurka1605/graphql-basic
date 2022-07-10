import { getTokenFromCtx } from './../helpers';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

const prefix = 'Bearer';

export const Token = createParamDecorator(
  (_, ctx: ExecutionContext): string => {
    const token = getTokenFromCtx(ctx);
    return token.match(prefix) ? token : `${prefix} ${token}`;
  }
);