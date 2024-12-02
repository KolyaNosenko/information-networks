import { ToEntity } from '../../../../common/database/db-mappers';
import { UpdateLibraryEntryParams } from '../../../domain';
import { UpdateLibraryEntryDto } from '../dto/update-library-entry.dto';

export class UpdateLibraryEntryDtoMapper
  implements ToEntity<UpdateLibraryEntryParams, UpdateLibraryEntryDto>
{
  toEntity(
    dto: UpdateLibraryEntryDto & { entryId: string },
  ): UpdateLibraryEntryParams {
    return {
      entryId: dto.entryId,
      isRead: dto.is_read,
      progress: dto.progress,
    };
  }
}
