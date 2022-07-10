import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { IJwt, ITrack, IUser } from 'src/models';

@Injectable()
export class UsersService {
  private baseUrl: string = process.env.USERS_URL;

  constructor(private http: HttpService) { }

  getToken(email: string, password: string) {
    return this.http.post<IJwt>(`${this.baseUrl}/login`, { email, password });
  }

  findOneById(id: string) {
    return this.http.get<ITrack>(`${this.baseUrl}/${id}`);
  }

  create(data: Partial<IUser>) {
    return this.http.post<IJwt>(`${this.baseUrl}/register`, data);
  }
}