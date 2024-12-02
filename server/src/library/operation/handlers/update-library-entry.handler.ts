import { UpdateLibraryEntryParams } from '../../domain';
import { LibraryService } from '../../services';
import { User } from '../../../user/domain';

export class UpdateLibraryEntryHandler {
  constructor(private readonly libraryService: LibraryService) {}

  async handle(user: User, params: UpdateLibraryEntryParams) {
    return this.libraryService.updateLibraryEntry(user, params);
  }
}
