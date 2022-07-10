import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AuthHeaderKeyName } from 'src/helpers';
import { IFavoriteAddInput, IFavourite } from 'src/models';

@Injectable()
export class FavouritesService {
  protected BASE_URL: string = process.env.FAVOURITES_URL;

  constructor(protected http: HttpService) { }

  public findAll(token: string) {
    return this.http.get<IFavourite>(
      this.BASE_URL,
      {
        headers: {
          [AuthHeaderKeyName]: token
        }
      }
    );
  }

  public add(data: IFavoriteAddInput, token: string) {
    return this.http.put<IFavourite>(
      `${this.BASE_URL}/add`,
      data,
      {
        headers: {
          [AuthHeaderKeyName]: token
        }
      }
    );
  }
}