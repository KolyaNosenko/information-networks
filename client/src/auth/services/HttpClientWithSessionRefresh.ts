import { AuthenticatedSessionDto } from './dto';
import { ApiError } from '../../common/errors';
import {
  HttpClient,
  HttpClientDecorator,
  HttpRequestConfig,
} from '../../common/http-client';

export class HttpClientWithSessionRefresh extends HttpClientDecorator {
  private constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  static instance: HttpClientWithSessionRefresh | null = null;

  static getInstance(httpClient: HttpClient): HttpClientWithSessionRefresh {
    if (!HttpClientWithSessionRefresh.instance) {
      HttpClientWithSessionRefresh.instance = new HttpClientWithSessionRefresh(
        httpClient,
      );
    }

    return HttpClientWithSessionRefresh.instance;
  }

  private refreshAccessJob: Promise<{
    data: AuthenticatedSessionDto;
    meta: unknown;
    success: boolean;
  }> | null = null;

  private sessionRefreshFailedListeners: Array<(reason: ApiError) => void> = [];

  private accessRefreshedListeners: Array<
    (session: AuthenticatedSessionDto) => void
  > = [];

  onSessionRefreshFailed(listener: (reason: ApiError) => void) {
    this.sessionRefreshFailedListeners.push(listener);
  }

  onSessionRefreshed(listener: (session: AuthenticatedSessionDto) => void) {
    this.accessRefreshedListeners.push(listener);
  }

  async delete<ResponseData = any, ResponseMeta = any>(
    url: string,
    config?: HttpRequestConfig,
  ): Promise<{ data: ResponseData; meta: ResponseMeta; success: boolean }> {
    try {
      return await super.delete<ResponseData, ResponseMeta>(url, config);
    } catch (err) {
      if (!this.isAccessForbiddenError(err)) {
        throw err;
      }

      await this.refreshAccess();
      return super.delete<ResponseData, ResponseMeta>(url, config);
    }
  }

  async get<ResponseData = any, ResponseMeta = any>(
    url: string,
    config?: HttpRequestConfig,
  ): Promise<{ data: ResponseData; meta: ResponseMeta; success: boolean }> {
    try {
      return await super.get<ResponseData, ResponseMeta>(url, config);
    } catch (err) {
      if (!this.isAccessForbiddenError(err)) {
        throw err;
      }

      await this.refreshAccess();
      return super.get<ResponseData, ResponseMeta>(url, config);
    }
  }

  async post<ResponseData = any, ResponseMeta = any>(
    url: string,
    config?: HttpRequestConfig,
  ): Promise<{ data: ResponseData; meta: ResponseMeta; success: boolean }> {
    try {
      return await super.post<ResponseData, ResponseMeta>(url, config);
    } catch (err) {
      if (!this.isAccessForbiddenError(err)) {
        throw err;
      }

      await this.refreshAccess();
      return super.post<ResponseData, ResponseMeta>(url, config);
    }
  }

  async put<ResponseData = any, ResponseMeta = any>(
    url: string,
    config?: HttpRequestConfig,
  ): Promise<{ data: ResponseData; meta: ResponseMeta; success: boolean }> {
    try {
      return await super.put<ResponseData, ResponseMeta>(url, config);
    } catch (err) {
      if (!this.isAccessForbiddenError(err)) {
        throw err;
      }

      await this.refreshAccess();
      return super.put<ResponseData, ResponseMeta>(url, config);
    }
  }

  private async refreshAccess() {
    if (this.refreshAccessJob) return this.refreshAccessJob;

    this.refreshAccessJob = super.post<AuthenticatedSessionDto>(
      '/v1/auth/refresh',
    );

    this.refreshAccessJob
      .then(({ data }) => {
        this.notifyAccessRefreshed(data);
      })
      .catch((err: ApiError) => {
        this.notifySessionRefreshFailed(err);

        throw err;
      })
      .finally(() => {
        this.refreshAccessJob = null;
      });

    return this.refreshAccessJob;
  }

  private isAccessForbiddenError(error: unknown) {
    return error instanceof ApiError && error.originalStatusCode === 403;
  }

  private notifySessionRefreshFailed(reason: ApiError) {
    this.sessionRefreshFailedListeners.forEach((listener) => {
      try {
        listener(reason);
      } catch (err) {
        console.error(err);
      }
    });
  }

  private notifyAccessRefreshed(session: AuthenticatedSessionDto) {
    this.accessRefreshedListeners.forEach((listener) => {
      try {
        listener(session);
      } catch (err) {
        console.error(err);
      }
    });
  }
}
