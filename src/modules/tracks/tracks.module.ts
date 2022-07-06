import { Module } from '@nestjs/common';
import { HttpModule } from 'src/modules/http.module';
import { TracksResolver } from './resolvers/tracks.resolver';
import { TracksService } from './services/tracks.service';

@Module({
  imports: [HttpModule],
  providers: [TracksResolver, TracksService],
})
export class TracksModule { }