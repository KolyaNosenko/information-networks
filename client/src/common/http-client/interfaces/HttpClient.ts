export type HttpRequestConfig = Partial<{
  headers: Record<string, string>;
  params: unknown;
  data: unknown;
}>;

export interface HttpClient {
  get<ResponseData = any, ResponseMeta = any>(
    url: string,
    config?: HttpRequestConfig,
  ): Promise<{ data: ResponseData; meta: ResponseMeta; success: boolean }>;
  post<ResponseData = any, ResponseMeta = any>(
    url: string,
    config?: HttpRequestConfig,
  ): Promise<{ data: ResponseData; meta: ResponseMeta; success: boolean }>;
  put<ResponseData = any, ResponseMeta = any>(
    url: string,
    config?: HttpRequestConfig,
  ): Promise<{ data: ResponseData; meta: ResponseMeta; success: boolean }>;
  delete<ResponseData = any, ResponseMeta = any>(
    url: string,
    config?: HttpRequestConfig,
  ): Promise<{ data: ResponseData; meta: ResponseMeta; success: boolean }>;
}
