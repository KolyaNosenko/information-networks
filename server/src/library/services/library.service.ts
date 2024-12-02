import { LibraryStorage } from './library.storage';
import { User } from '../../user/domain';
import {
  LibraryEntry,
  LibraryEntryNotFound,
  UpdateLibraryEntryParams,
} from '../domain';
import { PapersService } from '../../papers/services';
import { PaperNotFoundError } from '../../papers/entities';
import { generateUuid } from '../../common/utils/string';

export class LibraryService {
  constructor(
    private readonly libraryStorage: LibraryStorage,
    private readonly papersService: PapersService,
  ) {}

  async getUserLibrary(user: User) {
    return this.libraryStorage.getUserLibrary(user.getId());
  }

  async addLibraryEntry(user: User, paperId: string): Promise<LibraryEntry> {
    const paper = await this.papersService.getPaperById(paperId);

    if (!paper) throw new PaperNotFoundError();

    const libraryEntry = new LibraryEntry({
      id: generateUuid(),
      userId: user.getId(),
      isRead: false,
      paper,
      progress: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return this.libraryStorage.addLibraryEntry(libraryEntry);
  }

  async updateLibraryEntry(
    user: User,
    params: UpdateLibraryEntryParams,
  ): Promise<LibraryEntry> {
    const libraryEntry = await this.libraryStorage.getLibraryEntryById(
      params.entryId,
    );

    if (!libraryEntry || libraryEntry.getUserId() !== user.getId())
      throw new LibraryEntryNotFound();

    if ('progress' in params) {
      libraryEntry.setProgress(params.progress);
    }

    if ('isRead' in params) {
      libraryEntry.setIsRead(params.isRead);
    }

    libraryEntry.setUpdateAt(new Date());

    return this.libraryStorage.updateLibraryEntry(libraryEntry);
  }

  async removeLibraryEntry(user: User, entryId: string): Promise<void> {
    const libraryEntry = await this.libraryStorage.getLibraryEntryById(entryId);

    if (libraryEntry.getUserId() !== user.getId())
      throw new LibraryEntryNotFound();

    return this.libraryStorage.removeLibraryEntry(entryId);
  }
}
