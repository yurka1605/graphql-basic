import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { IBand } from 'src/models';
import { BaseEntityService } from 'src/services';

@Injectable()
export class BandsService extends BaseEntityService<IBand> {
  protected BASE_URL: string = process.env.BANDS_URL;

  constructor(protected http: HttpService) {
    super(http);
  }
}