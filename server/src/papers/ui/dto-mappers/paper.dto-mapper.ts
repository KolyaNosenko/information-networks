import { ToDto } from '../../../common/ui/dto-mappers';
import { Paper } from '../../entities';
import { PaperDto } from '../dto';

export class PaperDtoMapper implements ToDto<Paper, PaperDto> {
  toDto(entity: Paper): PaperDto {
    return {
      id: entity.getId(),
      name: entity.getName(),
      description: entity.getDescription(),
      cover_url: entity.getCoverUrl(),
      author: entity.getAuthor(),
      created_at: entity.getCreatedAt().getTime(),
      updated_at: entity.getCreatedAt().getTime(),
    };
  }
}
