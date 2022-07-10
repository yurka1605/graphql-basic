import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ITrack } from 'src/models';
import { BaseEntityService } from 'src/services';

@Injectable()
export class TracksService extends BaseEntityService<ITrack> {
  protected BASE_URL: string = process.env.TRACKS_URL;

  constructor(protected http: HttpService) {
    super(http);
  }
}