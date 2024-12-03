import { Controller, Get } from '@nestjs/common';
import { Public } from 'src/auth/infrastructure';
import { GetCategoriesHandler } from '../../operation';
import { CategoryDtoMapper } from './dto-mapper';
import { SuccessResponse } from '../../../common/ui/entities';

@Controller('api/v1/categories')
export class CategoriesController {
  constructor(private readonly getCategoriesHandler: GetCategoriesHandler) {}

  @Public()
  @Get()
  async getCategories() {
    const dtoMapper = new CategoryDtoMapper();

    const categories = await this.getCategoriesHandler.handle();

    return new SuccessResponse(categories.map(dtoMapper.toDto));
  }
}
