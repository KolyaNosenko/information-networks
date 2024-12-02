import { HttpClient } from '../http-client';

export abstract class BaseService {
  constructor(protected readonly http: HttpClient) {}
}
