import { ToDto } from '../../../../common/ui/dto-mappers';
import { Category } from '../../../domain';
import { CategoryDto } from '../dto';

export class CategoryDtoMapper implements ToDto<Category, CategoryDto> {
  toDto(entity: Category): CategoryDto {
    return {
      id: entity.getId(),
      name: entity.getName(),
      updated_at: entity.getUpdatedAt().getTime(),
      created_at: entity.getCreatedAt().getTime(),
    };
  }
}
