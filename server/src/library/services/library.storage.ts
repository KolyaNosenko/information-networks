import { LibraryEntry } from '../domain';

export interface LibraryStorage {
  getUserLibrary(userId: string): Promise<LibraryEntry[]>;
  getLibraryEntryById(entryId: string): Promise<LibraryEntry | null>;
  addLibraryEntry(libraryEntry: LibraryEntry): Promise<LibraryEntry>;
  updateLibraryEntry(libraryEntry: LibraryEntry): Promise<LibraryEntry>;
  removeLibraryEntry(entryId: string): Promise<void>;
}
