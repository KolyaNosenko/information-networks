export class ApiError extends Error {
  public originalStatusCode: number;

  public originalError: Error;

  constructor(error: { originalError: Error; originalStatusCode: number }) {
    const originalError = error.originalError || {};
    super(originalError.message);
    this.originalStatusCode = error.originalStatusCode;
    this.originalError = originalError;
  }
}
