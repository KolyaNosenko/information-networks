import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { stringifyQueryParams } from '../../utils/query.ts';
import { HttpRequestConfig, HttpClient } from '../interfaces';

export class AxiosHttpClient implements HttpClient {
  private readonly client: AxiosInstance;

  constructor(
    private readonly baseUrl: string,
    private readonly config?: AxiosRequestConfig,
  ) {
    this.client = axios.create({
      paramsSerializer: (params) => {
        return stringifyQueryParams(params);
      },
      ...(this.config || {}),
    });
  }

  async get<ResponseData = any, ResponseMeta = any>(
    url: string,
    config: HttpRequestConfig = {},
  ) {
    return this.request<ResponseData, ResponseMeta>({
      url,
      method: 'GET',
      ...config,
    });
  }

  async post<ResponseData = any, ResponseMeta = any>(
    url: string,
    config: HttpRequestConfig = {},
  ) {
    return this.request<ResponseData, ResponseMeta>({
      url,
      method: 'POST',
      ...config,
    });
  }

  async put<ResponseData = any, ResponseMeta = any>(
    url: string,
    config: HttpRequestConfig = {},
  ) {
    return this.request<ResponseData, ResponseMeta>({
      url,
      method: 'PUT',
      ...config,
    });
  }

  async delete<ResponseData = any, ResponseMeta = any>(
    url: string,
    config: HttpRequestConfig = {},
  ) {
    return this.request<ResponseData, ResponseMeta>({
      url,
      method: 'DELETE',
      ...config,
    });
  }

  private async request<ResponseData = any, ResponseMeta = any>(
    config: AxiosRequestConfig,
  ): Promise<{ data: ResponseData; meta: ResponseMeta; success: boolean }> {
    try {
      const { data: result } = await this.client.request({
        ...config,
        baseURL: this.baseUrl,
        method: config.method,
        headers: {
          'content-type': 'application/json',
          ...config.headers,
        },
        withCredentials: true,
      });
      return result;
    } catch (err: any) {
      throw err;
      // TODO add custom error
      // const originalError =
      //   err.response && err.response.data
      //     ? err.response.data.error
      //     : { message: err.message };
      //
      // throw new ApiError({
      //   originalError,
      //   originalStatusCode: err.response ? err.response.status : 400,
      // });
    }
  }
}
