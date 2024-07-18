import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SERVICE_CONFIG } from './config/api-service-config';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiConectionService<TModel, TDto> {
  // protected readonly baseUrl: string;
  // protected readonly resourceEndpoint: string;
  protected httpClient = inject(HttpClient);
  protected readonly config = inject(SERVICE_CONFIG);
  protected readonly baseUrl: string = environment.serviceUrl;
  protected readonly resourceEndpoint: string = this.config.resourceEndpoint;

  // constructor(
  // ) {
  //   this.baseUrl = environment.serviceUrl;
  //   this.resourceEndpoint = config.resourceEndpoint;
  // }

  getList(limit: number, offset: number) {
    return this.httpClient.get<TModel[]>(
      `${this.baseUrl}${this.resourceEndpoint}`,
      {
        params: {
          limit: limit.toString(),
          offset: offset.toString(),
        },
      },
    );
  }

  getById(id: number) {
    return this.httpClient.get<TModel>(
      `${this.baseUrl}${this.resourceEndpoint}/${id}`,
    );
  }

  add(dto: TDto) {
    return this.httpClient.post<TModel>(
      `${this.baseUrl}${this.resourceEndpoint}`,
      dto,
    );
  }

  update(id: number, dto: TDto) {
    return this.httpClient.put<TModel>(
      `${this.baseUrl}${this.resourceEndpoint}/${id}`,
      dto,
    );
  }

  remove(id: number) {
    return this.httpClient.delete<number>(
      `${this.baseUrl}${this.resourceEndpoint}/${id}`,
    );
  }
}
