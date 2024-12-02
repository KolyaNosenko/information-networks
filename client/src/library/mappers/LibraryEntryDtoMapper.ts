import { ToEntity } from '../../common/mappers';
import { PaperDtoMapper } from '../../papers/mappers';
import { LibraryEntry } from '../entities';
import { LibraryEntryDto } from '../services/dto';

export class LibraryEntryDtoMapper
  implements ToEntity<LibraryEntry, LibraryEntryDto>
{
  toEntity(dto: LibraryEntryDto): LibraryEntry {
    const paperDtoMapper = new PaperDtoMapper();

    return {
      id: dto.id,
      userId: dto.user_id,
      paper: paperDtoMapper.toEntity.call(this, dto.paper),
      progress: dto.progress,
      isRead: dto.is_read,
      createdAt: dto.created_at,
      updatedAt: dto.updated_at,
    };
  }
}
