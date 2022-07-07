import { IPagination } from '../models';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AuthHeaderKeyName } from 'src/helpers';

@Injectable()
export abstract class BaseEntityService<T, D> {
  protected abstract BASE_URL: string;

  constructor(protected http: HttpService) { }

  public findAll({ limit, offset }: IPagination) {
    let paginationUrl = this.BASE_URL;
    if (limit || offset) {
      paginationUrl += '?';
    }

    if (limit) {
      paginationUrl += `limit=${limit}`;
    }

    if (offset) {
      paginationUrl += `offset=${offset}`;
    }

    return this.http.get<D>(paginationUrl);
  }

  public findOneById(id: string) {
    return this.http.get<T>(`${this.BASE_URL}/${id}`);
  }

  public create(data: Partial<T>, token: string) {
    return this.http.post<T>(
      this.BASE_URL,
      data,
      {
        headers: {
          [AuthHeaderKeyName]: token
        }
      }
    );
  }

  public update(id: string, data: Partial<T>, token: string) {
    return this.http.put<T>(
      `${this.BASE_URL}/${id}`,
      data,
      {
        headers: {
          [AuthHeaderKeyName]: token
        }
      }
    );
  }

  public delete(id: string, token: string) {
    return this.http.delete(
      `${this.BASE_URL}/${id}`,
      {
        headers: {
          [AuthHeaderKeyName]: token
        }
      }
    );
  }
}