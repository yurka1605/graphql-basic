import { Module } from '@nestjs/common';
import { HttpModule } from 'src/modules/http.module';
import { GenresResolver } from './resolvers/genres.resolver';
import { GenresService } from './services/genres.service';

@Module({
  imports: [HttpModule],
  providers: [GenresResolver, GenresService],
})
export class GenresModule { }