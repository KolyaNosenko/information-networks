export class PaperNotFoundError extends Error {
  constructor() {
    super('Paper not found');
  }
}
