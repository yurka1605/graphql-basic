import { IPagination, IArtist } from 'src/models';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ArtistsService } from '../services/artists.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { Token } from 'src/decorators/token.decorator';
import { of, forkJoin } from 'rxjs';
import { BandsService } from 'src/modules/bands/services/bands.service';

@Resolver('Artist')
export class ArtistsResolver {
  constructor(
    private readonly artistsService: ArtistsService,
    private readonly bandsService: BandsService,
  ) { }

  @Query()
  artist(@Args('id') id: string) {
    return this.artistsService.findOneById(id);
  }

  @Query()
  artists(@Args('input') data: IPagination) {
    return this.artistsService.findAll(data);
  }

  @Resolver()
  @ResolveField()
  bands(@Parent() { bandsIds }: IArtist) {
    return bandsIds.length ?
      forkJoin(bandsIds.map(id => this.bandsService.findOneById(id))) :
      of(bandsIds);
  }

  @UseGuards(AuthGuard)
  @Mutation()
  createArtist(
    @Token() token: string,
    @Args('input') data: Partial<IArtist>
  ) {
    return this.artistsService.create(data, token);
  }

  @UseGuards(AuthGuard)
  @Mutation()
  updateArtist(
    @Token() token: string,
    @Args('id') id: string,
    @Args('input') data: Partial<IArtist>
  ) {
    return this.artistsService.update(id, data, token);
  }

  @UseGuards(AuthGuard)
  @Mutation()
  deleteArtist(
    @Args('id') id: string,
    @Token() token: string,
  ) {
    return this.artistsService.delete(id, token);
  }
}