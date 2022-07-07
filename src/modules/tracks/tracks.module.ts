import { Module } from '@nestjs/common';
import { HttpModule } from 'src/modules/http.module';
import { GenresService } from '../genres/services/genres.service';
import { TracksResolver } from './resolvers/tracks.resolver';
import { TracksService } from './services/tracks.service';

@Module({
  imports: [HttpModule],
  providers: [
    TracksResolver,
    TracksService,
    GenresService
  ],
})
export class TracksModule { }