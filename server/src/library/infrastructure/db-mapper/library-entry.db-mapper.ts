import { ToEntity } from '../../../common/database/db-mappers';
import { LibraryEntry } from '../../domain';
import { UserLibrary, Paper } from '../../../../prisma/prisma';
import { PaperDbMapper } from '../../../papers/infrastructure';

export class LibraryEntryDbMapper
  implements ToEntity<LibraryEntry, UserLibrary & { paper: Paper }>
{
  toEntity(db: UserLibrary & { paper: Paper }): LibraryEntry {
    const paperDbMapper = new PaperDbMapper();

    return new LibraryEntry({
      id: db.id,
      userId: db.userId,
      progress: db.progress,
      isRead: db.isRead,
      paper: paperDbMapper.toEntity.call(this, db.paper),
      updatedAt: db.updatedAt,
      createdAt: db.createdAt,
    });
  }
}
