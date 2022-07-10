import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { getTokenFromCtx } from 'src/helpers';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(ctx: ExecutionContext): boolean {
    const token = getTokenFromCtx(ctx);
    return !!token;
  }
}