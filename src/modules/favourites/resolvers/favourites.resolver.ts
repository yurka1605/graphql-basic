import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Query, ResolveField, Parent, Mutation } from '@nestjs/graphql';
import { forkJoin, of } from 'rxjs';
import { AuthGuard } from 'src/guards/auth.guard';
import { IFavourite } from 'src/models';
import { Token } from 'src/decorators/token.decorator';
import { ArtistsService } from 'src/modules/artists/services/artists.service';
import { BandsService } from 'src/modules/bands/services/bands.service';
import { GenresService } from 'src/modules/genres/services/genres.service';
import { TracksService } from 'src/modules/tracks/services/tracks.service';
import { FavouritesService } from '../services/favourites.service';


@Resolver('Favourites')
@UseGuards(AuthGuard)
export class FavouritesResolver {
  constructor(
    private readonly favouritesService: FavouritesService,
    private readonly artistsService: ArtistsService,
    private readonly bandsService: BandsService,
    private readonly tracksService: TracksService,
    private readonly genresService: GenresService,
  ) { }

  @Query()
  favourites(@Token() token: string) {
    return this.favouritesService.findAll(token);
  }

  @Resolver()
  @ResolveField()
  artists(@Parent() { artistsIds }: IFavourite) {
    return artistsIds.length ?
      forkJoin(artistsIds.map(id => this.artistsService.findOneById(id))) :
      of(artistsIds);
  }

  @Resolver()
  @ResolveField()
  bands(@Parent() { bandsIds }: IFavourite) {
    return bandsIds.length ?
      forkJoin(bandsIds.map(id => this.bandsService.findOneById(id))) :
      of(bandsIds);
  }

  @Resolver()
  @ResolveField()
  tracks(@Parent() { tracksIds }: IFavourite) {
    return tracksIds.length ?
      forkJoin(tracksIds.map(id => this.tracksService.findOneById(id))) :
      of(tracksIds);
  }

  @Resolver()
  @ResolveField()
  genres(@Parent() { genresIds }: IFavourite) {
    return genresIds.length ?
      forkJoin(genresIds.map(id => this.genresService.findOneById(id))) :
      of(genresIds);
  }

  @Mutation()
  addTrackToFavourites(
    @Token() token: string,
    @Args('id') id: string,
  ) {
    return this.favouritesService.add({ id, type: 'tracks' }, token);
  }

  @Mutation()
  addBandToFavourites(
    @Token() token: string,
    @Args('id') id: string,
  ) {
    return this.favouritesService.add({ id, type: 'bands' }, token);
  }

  @Mutation()
  addArtistToFavourites(
    @Token() token: string,
    @Args('id') id: string,
  ) {
    return this.favouritesService.add({ id, type: 'artists' }, token);
  }

  @Mutation()
  addGenreToFavourites(
    @Token() token: string,
    @Args('id') id: string,
  ) {
    return this.favouritesService.add({ id, type: 'genres' }, token);
  }
}