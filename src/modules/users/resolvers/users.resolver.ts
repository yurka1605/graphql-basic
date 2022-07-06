import { IUser } from './../../../models/user';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from '../services/users.service';

@Resolver('User')
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
  ) { }

  @Query()
  async jwt(
    @Args('email') email: string,
    @Args('password') password: string
  ) {
    return this.usersService.getToken(email, password);
  }

  @Query()
  async user(@Args('id') id: string) {
    return this.usersService.findOneById(id);
  }

  @Mutation()
  async register(@Args('input') data: Partial<IUser>) {
    return this.usersService.create(data);
  }
}