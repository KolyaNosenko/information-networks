import { Injectable } from '@nestjs/common';
import { LibraryStorage } from '../services';
import { LibraryEntry } from '../domain';
import { DatabaseService } from '../../common/database/services';
import { LibraryEntryDbMapper } from './db-mapper';

@Injectable()
export class PrismaLibraryStorage implements LibraryStorage {
  constructor(private readonly db: DatabaseService) {}

  async getUserLibrary(userId: string): Promise<LibraryEntry[]> {
    const dbMapper = new LibraryEntryDbMapper();

    const libraryEntries = await this.db.userLibrary.findMany({
      where: { userId: userId },
      include: { paper: true },
    });

    return libraryEntries.map(dbMapper.toEntity);
  }

  async getLibraryEntryById(entryId: string): Promise<LibraryEntry | null> {
    const dbMapper = new LibraryEntryDbMapper();

    const libraryEntryFromDb = await this.db.userLibrary.findUnique({
      where: { id: entryId },
      include: { paper: true },
    });

    return libraryEntryFromDb ? dbMapper.toEntity(libraryEntryFromDb) : null;
  }

  async addLibraryEntry(libraryEntry: LibraryEntry): Promise<LibraryEntry> {
    const dbMapper = new LibraryEntryDbMapper();

    const libraryEntryFromDb = await this.db.userLibrary.create({
      data: {
        id: libraryEntry.getId(),
        userId: libraryEntry.getUserId(),
        isRead: libraryEntry.getIsRead(),
        progress: libraryEntry.getProgress(),
        paperId: libraryEntry.getPaper().getId(),
        updatedAt: libraryEntry.getUpdateAt(),
        createdAt: libraryEntry.getCreateAt(),
      },
      include: { paper: true },
    });

    return dbMapper.toEntity(libraryEntryFromDb);
  }

  async updateLibraryEntry(libraryEntry: LibraryEntry): Promise<LibraryEntry> {
    const dbMapper = new LibraryEntryDbMapper();

    const libraryEntryFromDb = await this.db.userLibrary.update({
      where: { id: libraryEntry.getId() },
      data: {
        isRead: libraryEntry.getIsRead(),
        progress: libraryEntry.getProgress(),
        updatedAt: libraryEntry.getUpdateAt(),
      },
      include: { paper: true },
    });

    return dbMapper.toEntity(libraryEntryFromDb);
  }

  async removeLibraryEntry(entryId: string): Promise<void> {
    await this.db.userLibrary.delete({
      where: { id: entryId },
    });
  }
}
