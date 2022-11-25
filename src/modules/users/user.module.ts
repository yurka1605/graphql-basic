import { UsersResolver } from './resolvers/users.resolver';
import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { HttpModule } from 'src/modules/http.module';

@Module({
  imports: [HttpModule],
  providers: [UsersResolver, UsersService],
})
export class UsersModule { }