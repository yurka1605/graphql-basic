import { IPagination, ITrack } from 'src/models';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TracksService } from '../services/tracks.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { Token } from 'src/decorators/token.decorator';

@Resolver('Track')
export class TracksResolver {
  constructor(
    private readonly tracksService: TracksService,
  ) { }

  @Query()
  async track(@Args('id') id: string) {
    return this.tracksService.findOneById(id);
  }

  @Query()
  async tracks(@Args('input') data: IPagination) {
    return this.tracksService.findAll(data);
  }

  // @ResolveField()
  // async posts(@Parent() ) {
  //   const { id } = author;
  //   return this.postsService.findAll({ authorId: id }); 
  // }

  @UseGuards(AuthGuard)
  @Mutation()
  async createTrack(
    @Token() token: string,
    @Args('input') data: Partial<ITrack>
  ) {
    return this.tracksService.create(data, token);
  }

  @UseGuards(AuthGuard)
  @Mutation()
  async updateTrack(
    @Token() token: string,
    @Args('id') id: string,
    @Args('input') data: Partial<ITrack>
  ) {
    return this.tracksService.update(id, data, token);
  }

  @UseGuards(AuthGuard)
  @Mutation()
  async deleteTrack(
    @Args('id') id: string,
    @Token() token: string,
  ) {
    return this.tracksService.delete(id, token);
  }
}