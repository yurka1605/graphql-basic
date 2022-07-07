import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { TracksService } from '../services/tracks.service';
import { IPagination, ITrack } from 'src/models';
import { AuthGuard } from 'src/guards/auth.guard';
import { Token } from 'src/decorators/token.decorator';
import { GenresService } from 'src/modules/genres/services/genres.service';
import { forkJoin, of } from 'rxjs';

@Resolver('Track')
export class TracksResolver {
  constructor(
    private readonly tracksService: TracksService,
    private readonly genresService: GenresService,
  ) { }

  @Query()
  track(@Args('id') id: string) {
    return this.tracksService.findOneById(id);
  }

  @Query()
  tracks(@Args('input') data: IPagination) {
    return this.tracksService.findAll(data);
  }

  @Resolver()
  @ResolveField()
  genres(@Parent() { genresIds }: ITrack) {
    return genresIds.length ?
      forkJoin(genresIds.map(id => this.genresService.findOneById(id))) :
      of(genresIds);
  }

  // @Resolver()
  // @ResolveField()
  // bands(@Parent() { bandIds }: ITrack) {
  //   return bandIds.length ?
  //     forkJoin(bandIds.map(id => this.bandsService.findOneById(id))) :
  //     of(bandIds);
  // }

  // @Resolver()
  // @ResolveField()
  // bands(@Parent() { artistIds }: ITrack) {
  //   return artistIds.length ?
  //     forkJoin(artistIds.map(id => this.artistsService.findOneById(id))) :
  //     of(artistIds);
  // }

  @UseGuards(AuthGuard)
  @Mutation()
  createTrack(
    @Token() token: string,
    @Args('input') data: Partial<ITrack>
  ) {
    return this.tracksService.create(data, token);
  }

  @UseGuards(AuthGuard)
  @Mutation()
  updateTrack(
    @Token() token: string,
    @Args('id') id: string,
    @Args('input') data: Partial<ITrack>
  ) {
    return this.tracksService.update(id, data, token);
  }

  @UseGuards(AuthGuard)
  @Mutation()
  deleteTrack(
    @Args('id') id: string,
    @Token() token: string,
  ) {
    return this.tracksService.delete(id, token);
  }
}