import { ToDto } from '../../../../common/ui/dto-mappers';
import { LibraryEntry } from '../../../domain';
import { LibraryEntryDto } from '../dto';
import { PaperDtoMapper } from '../../../../papers/ui';

export class LibraryEntryDtoMapper
  implements ToDto<LibraryEntry, LibraryEntryDto>
{
  toDto(entity: LibraryEntry): LibraryEntryDto {
    const paperDtoMapper = new PaperDtoMapper();

    return {
      id: entity.getId(),
      user_id: entity.getUserId(),
      paper: paperDtoMapper.toDto.call(this, entity.getPaper()),
      progress: entity.getProgress(),
      is_read: entity.getIsRead(),
      createdAt: entity.getCreateAt().getTime(),
      updatedAt: entity.getUpdateAt().getTime(),
    };
  }
}
