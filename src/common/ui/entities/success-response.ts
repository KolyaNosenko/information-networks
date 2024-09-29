export class SuccessResponse<T> {
  public data: T;
  public success = true;

  constructor(data?: T) {
    this.data = data;
  }
}
