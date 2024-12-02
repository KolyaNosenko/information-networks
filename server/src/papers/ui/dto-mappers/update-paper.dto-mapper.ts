import { ToEntity } from '../../../common/database/db-mappers';
import { UpdatePaperParams } from '../../entities';
import { UpdatePaperDto } from '../dto/update-paper.dto';

export class UpdatePaperDtoMapper
  implements ToEntity<UpdatePaperParams, UpdatePaperDto>
{
  toEntity(db: UpdatePaperDto & { paperId: string }): UpdatePaperParams {
    return {
      paperId: db.paperId,
      name: db.name,
      description: db.description,
      coverUrl: db.cover_url,
      author: db.author,
    };
  }
}
