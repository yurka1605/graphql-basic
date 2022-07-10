import { Module } from '@nestjs/common';
import { HttpModule } from 'src/modules/http.module';
import { AlbumsService } from '../albums/services/albums.service';
import { ArtistsService } from '../artists/services/artists.service';
import { BandsService } from '../bands/services/bands.service';
import { GenresService } from '../genres/services/genres.service';
import { TracksResolver } from './resolvers/tracks.resolver';
import { TracksService } from './services/tracks.service';

@Module({
  imports: [HttpModule],
  providers: [
    TracksResolver,
    TracksService,
    GenresService,
    ArtistsService,
    AlbumsService,
    BandsService,
  ],
})
export class TracksModule { }