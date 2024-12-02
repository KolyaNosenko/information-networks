import { User } from '../../../user/domain';
import { LibraryService } from '../../services';

export class RemoveLibraryEntryHandler {
  constructor(private readonly libraryService: LibraryService) {}

  handle(user: User, entryId: string) {
    return this.libraryService.removeLibraryEntry(user, entryId);
  }
}
