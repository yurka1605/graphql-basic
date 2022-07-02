import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { ITrack } from 'src/models';

@Injectable()
export class TracksService {
  constructor(private readonly http: HttpService) { }

  findAll(limit: number, offset: number): Observable<AxiosResponse<ITrack[]>> {
    return this.http.get<ITrack[]>(process.env.TRACKS_URL);
  }

  findOneById(id: string): Observable<AxiosResponse<ITrack>> {
    return this.http.get<ITrack>(`${process.env.TRACKS_URL}/${id}`);
  }
}