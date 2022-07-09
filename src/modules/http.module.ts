import { HttpModule as BaseHttpModule, HttpService } from '@nestjs/axios';
import { HttpException, Logger, Module, OnModuleInit } from '@nestjs/common';
import { AxiosInstance, AxiosResponse } from 'axios';
import { IdsKeyNames } from '../models';

@Module({
  imports: [BaseHttpModule],
  exports: [BaseHttpModule]
})

export class HttpModule implements OnModuleInit {
  constructor(
    private readonly httpService: HttpService,
  ) { }

  public onModuleInit(): void {
    const logger = new Logger('Axios');

    const axios: AxiosInstance = this.httpService.axiosRef;
    axios.interceptors.request.use(function (config) {
      config['metadata'] = { ...config['metadata'], startDate: new Date() };
      return config;
    });

    axios.interceptors.response.use(
      (response: AxiosResponse<any>) => {
        const { config, data } = response;
        config['metadata'] = { ...config['metadata'], endDate: new Date() };
        const duration = config['metadata'].endDate.getTime() - config['metadata'].startDate.getTime();
        logger.log(`${config.method.toUpperCase()} ${config.url} ${duration}ms`);
        if (data) {
          this.replaceIdKeys(data);
        }
        return data || null;
      },
      (e) => {
        const { status, data } = e.response;
        const { statusCode, error, message } = data;
        logger.error(`${statusCode} ${error} - ${message}`);

        if (status === 500) {
          const serviceName = e.request.path.split('/')[2].toUpperCase();
          data.message = `Unhandled '${serviceName}' microservice error. Check the correctness of the entered data`;
        }

        throw new HttpException(data, status);
      });
  }

  replaceIdKeys(data: any) {
    Object.entries(data).forEach(([key, value]: [string, any]) => {
      if (key === IdsKeyNames.API) {
        data[IdsKeyNames.TYPES] = data[IdsKeyNames.API];
        delete data[IdsKeyNames.API];
      }

      if (Array.isArray(value)) {
        value.forEach(item => {
          this.replaceIdKeys(item);
        });
      }
    });
  }
}