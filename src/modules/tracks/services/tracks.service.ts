import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ITrack, ITracks } from 'src/models';
import { BaseEntityService } from 'src/services';

@Injectable()
export class TracksService extends BaseEntityService<ITrack, ITracks> {
  protected BASE_URL: string = process.env.TRACKS_URL;

  constructor(protected http: HttpService) {
    super(http);
  }
}