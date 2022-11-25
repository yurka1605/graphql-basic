import { Module } from '@nestjs/common';
import { HttpModule } from 'src/modules/http.module';
import { ArtistsService } from '../artists/services/artists.service';
import { BandsService } from '../bands/services/bands.service';
import { GenresService } from '../genres/services/genres.service';
import { TracksService } from '../tracks/services/tracks.service';
import { FavouritesResolver } from './resolvers/favourites.resolver';
import { FavouritesService } from './services/favourites.service';

@Module({
  imports: [HttpModule],
  providers: [
    FavouritesResolver,
    FavouritesService,
    ArtistsService,
    BandsService,
    TracksService,
    GenresService,
  ],
})
export class FavouritesModule { }