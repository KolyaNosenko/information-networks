import { Response } from 'express';

export abstract class BaseView {
  abstract getViewName(): string;

  render(response: Response, viewData: unknown = {}) {
    return response.render(this.getViewName(), { viewData });
  }
}
