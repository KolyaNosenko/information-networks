import { ToEntity } from '../../../common/database/db-mappers';
import { CreateEventParams } from '../../entities';
import { CreateEventDto } from '../dto';

export class CreateEventDtoMapper
  implements ToEntity<CreateEventParams, CreateEventDto>
{
  toEntity(dto: CreateEventDto): CreateEventParams {
    return {
      name: dto.name,
      description: dto.description,
    };
  }
}
