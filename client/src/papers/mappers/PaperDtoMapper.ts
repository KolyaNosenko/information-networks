import { ToEntity } from '../../common/mappers';
import { Paper } from '../entities';
import { PaperDto } from '../services/dto';

export class PaperDtoMapper implements ToEntity<Paper, PaperDto> {
  toEntity(dto: PaperDto): Paper {
    return {
      id: dto.id,
      name: dto.name,
      description: dto.description,
      coverUrl: dto.cover_url,
      author: dto.author,
    };
  }
}
