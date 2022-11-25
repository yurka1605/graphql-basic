import { Module } from '@nestjs/common';
import { HttpModule } from 'src/modules/http.module';
import { ArtistsService } from '../artists/services/artists.service';
import { GenresService } from '../genres/services/genres.service';
import { BandsResolver } from './resolvers/bands.resolver';
import { BandsService } from './services/bands.service';

@Module({
  imports: [HttpModule],
  providers: [
    BandsResolver,
    BandsService,
    GenresService,
    ArtistsService
  ],
})
export class BandsModule { }