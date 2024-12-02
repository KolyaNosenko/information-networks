import { LibraryService } from '../../services';
import { User } from '../../../user/domain';

export class GetUserLibraryHandler {
  constructor(private readonly libraryService: LibraryService) {}

  async handle(user: User) {
    return this.libraryService.getUserLibrary(user);
  }
}
