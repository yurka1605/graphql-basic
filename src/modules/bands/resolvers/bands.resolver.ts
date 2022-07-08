import { IPagination, IBand } from 'src/models';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { BandsService } from '../services/bands.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { Token } from 'src/decorators/token.decorator';
import { GenresService } from 'src/modules/genres/services/genres.service';
import { of, forkJoin, map } from 'rxjs';
import { ArtistsService } from 'src/modules/artists/services/artists.service';

@Resolver('Band')
export class BandsResolver {
  constructor(
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService,
    private readonly artistsService: ArtistsService,
  ) { }

  @Query()
  band(@Args('id') id: string) {
    return this.bandsService.findOneById(id);
  }

  @Query()
  bands(@Args('input') data: IPagination) {
    return this.bandsService.findAll(data);
  }

  @Resolver()
  @ResolveField()
  genres(@Parent() { genresIds }: IBand) {
    return genresIds.length ?
      forkJoin(genresIds.map(id => this.genresService.findOneById(id))) :
      of(genresIds);
  }

  @Resolver()
  @ResolveField()
  members(@Parent() { members }: IBand) {
    return !members.length ?
      of(members) :
      forkJoin(members.map(({ artist }) => this.artistsService.findOneById(artist)))
        .pipe(
          map(artists => {
            return artists.filter(artist => !!artist)
              .map((artist, index) => ({
                ...artist,
                instrument: members[index].instrument,
                years: members[index].years
              }));
          }),
        );
  }

  @UseGuards(AuthGuard)
  @Mutation()
  createBand(
    @Token() token: string,
    @Args('input') data: Partial<IBand>
  ) {
    return this.bandsService.create(data, token);
  }

  @UseGuards(AuthGuard)
  @Mutation()
  updateBand(
    @Token() token: string,
    @Args('id') id: string,
    @Args('input') data: Partial<IBand>
  ) {
    return this.bandsService.update(id, data, token);
  }

  @UseGuards(AuthGuard)
  @Mutation()
  deleteBand(
    @Args('id') id: string,
    @Token() token: string,
  ) {
    return this.bandsService.delete(id, token);
  }
}