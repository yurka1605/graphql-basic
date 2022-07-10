import { IPagination, IAlbum } from 'src/models';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { AlbumsService } from '../services/albums.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { Token } from 'src/decorators/token.decorator';
import { forkJoin, of } from 'rxjs';
import { ArtistsService } from 'src/modules/artists/services/artists.service';
import { BandsService } from 'src/modules/bands/services/bands.service';
import { GenresService } from 'src/modules/genres/services/genres.service';
import { TracksService } from 'src/modules/tracks/services/tracks.service';

@Resolver('Album')
export class AlbumsResolver {
  constructor(
    private readonly albumsService: AlbumsService,
    private readonly artistsService: ArtistsService,
    private readonly bandsService: BandsService,
    private readonly tracksService: TracksService,
    private readonly genresService: GenresService,
  ) { }

  @Query()
  album(@Args('id') id: string) {
    return this.albumsService.findOneById(id);
  }

  @Query()
  albums(@Args('input') data: IPagination) {
    return this.albumsService.findAll(data);
  }

  @Resolver()
  @ResolveField()
  artists(@Parent() { artistsIds }: IAlbum) {
    return artistsIds.length ?
      forkJoin(artistsIds.map(id => this.artistsService.findOneById(id))) :
      of(artistsIds);
  }

  @Resolver()
  @ResolveField()
  bands(@Parent() { bandsIds }: IAlbum) {
    return bandsIds.length ?
      forkJoin(bandsIds.map(id => this.bandsService.findOneById(id))) :
      of(bandsIds);
  }

  @Resolver()
  @ResolveField()
  tracks(@Parent() { trackIds }: IAlbum) {
    return trackIds.length ?
      forkJoin(trackIds.map(id => this.tracksService.findOneById(id))) :
      of(trackIds);
  }

  @Resolver()
  @ResolveField()
  genres(@Parent() { genresIds }: IAlbum) {
    return genresIds.length ?
      forkJoin(genresIds.map(id => this.genresService.findOneById(id))) :
      of(genresIds);
  }


  @UseGuards(AuthGuard)
  @Mutation()
  createAlbum(
    @Token() token: string,
    @Args('input') data: Partial<IAlbum>
  ) {
    return this.albumsService.create(data, token);
  }

  @UseGuards(AuthGuard)
  @Mutation()
  updateAlbum(
    @Token() token: string,
    @Args('id') id: string,
    @Args('input') data: Partial<IAlbum>
  ) {
    return this.albumsService.update(id, data, token);
  }

  @UseGuards(AuthGuard)
  @Mutation()
  deleteAlbum(
    @Args('id') id: string,
    @Token() token: string,
  ) {
    return this.albumsService.delete(id, token);
  }
}