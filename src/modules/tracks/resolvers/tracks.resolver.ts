import { Args, Query, Resolver } from '@nestjs/graphql';
import { TracksService } from '../services/tracks.service';

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
  async tracks(
    @Args('limit') limit: number,
    @Args('id') offset: number
  ) {
    return this.tracksService.findAll(limit, offset);
  }
}