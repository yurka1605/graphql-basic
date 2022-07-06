import { getTokenFromCtx } from './../helpers';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Token = createParamDecorator(
  (_, ctx: ExecutionContext): string => getTokenFromCtx(ctx)
);