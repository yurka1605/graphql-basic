import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { IArtist } from 'src/models';
import { BaseEntityService } from 'src/services';

@Injectable()
export class ArtistsService extends BaseEntityService<IArtist> {
  protected BASE_URL: string = process.env.ARTISTS_URL;

  constructor(protected http: HttpService) {
    super(http);
  }
}