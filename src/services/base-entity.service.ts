import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AuthHeaderKeyName } from 'src/helpers';
import { IPagination, IEntityPagination } from 'src/models';

@Injectable()
export abstract class BaseEntityService<T> {
  protected abstract BASE_URL: string;

  constructor(protected http: HttpService) { }

  public findAll(data?: IPagination) {
    const queryParams = data ? this.getQueryString(Object.entries(data)) : '';
    return this.http.get<IEntityPagination<T>>(
      `${this.BASE_URL}${queryParams ? `?${queryParams}` : queryParams}`
    );
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

  private getQueryString(params: Array<[string, string | number]>) {
    return params.reduce((queryParams: string, [key, value]: [string, string | number]) => {
      if (value || (typeof value === 'number' && value === 0)) {
        const paramString = `${key}=${value}`;
        queryParams += queryParams ? `&${paramString}` : paramString;
      }

      return queryParams;
    }, '');
  }
}
