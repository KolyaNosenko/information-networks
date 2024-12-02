import { HttpClient, HttpRequestConfig } from '../interfaces';

export class HttpClientDecorator implements HttpClient {
  constructor(private readonly httpClient: HttpClient) {}

  delete<ResponseData = any, ResponseMeta = any>(
    url: string,
    config?: HttpRequestConfig,
  ): Promise<{ data: ResponseData; meta: ResponseMeta; success: boolean }> {
    return this.httpClient.delete(url, config);
  }

  get<ResponseData = any, ResponseMeta = any>(
    url: string,
    config?: HttpRequestConfig,
  ): Promise<{ data: ResponseData; meta: ResponseMeta; success: boolean }> {
    return this.httpClient.get(url, config);
  }

  post<ResponseData = any, ResponseMeta = any>(
    url: string,
    config?: HttpRequestConfig,
  ): Promise<{ data: ResponseData; meta: ResponseMeta; success: boolean }> {
    return this.httpClient.post(url, config);
  }

  put<ResponseData = any, ResponseMeta = any>(
    url: string,
    config?: HttpRequestConfig,
  ): Promise<{ data: ResponseData; meta: ResponseMeta; success: boolean }> {
    return this.httpClient.put(url, config);
  }
}
