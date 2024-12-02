import { ToEntity } from '../../../common/database/db-mappers';
import { AddPaperParams } from '../../entities';
import { AddPaperDto } from '../dto';

export class AddPaperDtoMapper
  implements ToEntity<AddPaperParams, AddPaperDto>
{
  toEntity(dto: AddPaperDto): AddPaperParams {
    return {
      name: dto.name,
      description: dto.description,
      coverUrl: dto.cover_url,
      author: dto.author,
    };
  }
}
