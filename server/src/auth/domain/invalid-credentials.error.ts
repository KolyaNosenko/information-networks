export class InvalidAccountCredentials extends Error {
  constructor() {
    super('Invalid account credentials');
  }
}
