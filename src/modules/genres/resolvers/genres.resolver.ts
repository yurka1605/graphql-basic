import { IPagination, IGenre } from 'src/models';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GenresService } from '../services/genres.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { Token } from 'src/decorators/token.decorator';

@Resolver('Genre')
export class GenresResolver {
  constructor(
    private readonly genresService: GenresService,
  ) { }

  @Query()
  genre(@Args('id') id: string) {
    return this.genresService.findOneById(id);
  }

  @Query()
  genres(@Args('input') data: IPagination) {
    return this.genresService.findAll(data);
  }

  @UseGuards(AuthGuard)
  @Mutation()
  createGenre(
    @Token() token: string,
    @Args('input') data: Partial<IGenre>
  ) {
    return this.genresService.create(data, token);
  }

  @UseGuards(AuthGuard)
  @Mutation()
  updateGenre(
    @Token() token: string,
    @Args('id') id: string,
    @Args('input') data: Partial<IGenre>
  ) {
    return this.genresService.update(id, data, token);
  }

  @UseGuards(AuthGuard)
  @Mutation()
  deleteGenre(
    @Args('id') id: string,
    @Token() token: string,
  ) {
    return this.genresService.delete(id, token);
  }
}