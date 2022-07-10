import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { IAlbum } from 'src/models';
import { BaseEntityService } from 'src/services';

@Injectable()
export class AlbumsService extends BaseEntityService<IAlbum> {
  protected BASE_URL: string = process.env.ALBUMS_URL;

  constructor(protected http: HttpService) {
    super(http);
  }
}