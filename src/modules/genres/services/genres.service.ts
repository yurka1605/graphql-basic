import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { IGenre } from 'src/models';
import { BaseEntityService } from 'src/services';

@Injectable()
export class GenresService extends BaseEntityService<IGenre> {
  protected BASE_URL: string = process.env.GENRES_URL;

  constructor(protected http: HttpService) {
    super(http);
  }
}