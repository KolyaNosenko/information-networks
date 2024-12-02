import { HttpClient } from '../http-client';

export abstract class BaseService {
  constructor(private readonly http: HttpClient) {}
}
