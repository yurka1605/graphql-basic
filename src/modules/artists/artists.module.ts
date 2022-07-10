import { Module } from '@nestjs/common';
import { HttpModule } from 'src/modules/http.module';
import { BandsService } from '../bands/services/bands.service';
import { ArtistsResolver } from './resolvers/artists.resolver';
import { ArtistsService } from './services/artists.service';

@Module({
  imports: [HttpModule],
  providers: [ArtistsResolver, ArtistsService, BandsService],
})
export class ArtistsModule { }