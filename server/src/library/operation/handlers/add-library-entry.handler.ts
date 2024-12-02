import { LibraryEntry } from '../../domain';
import { LibraryService } from '../../services';
import { User } from '../../../user/domain';

export class AddLibraryEntryHandler {
  constructor(private readonly libraryService: LibraryService) {}

  handle(user: User, paperId: string): Promise<LibraryEntry> {
    return this.libraryService.addLibraryEntry(user, paperId);
  }
}
