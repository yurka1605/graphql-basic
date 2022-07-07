import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TracksModule } from './modules/tracks/tracks.module';
import { UsersModule } from './modules/users/user.module';
import { GenresModule } from './modules/genres/genres.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
    TracksModule,
    UsersModule,
    GenresModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
