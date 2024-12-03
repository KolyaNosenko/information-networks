import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Roles } from 'src/user/infrastructure';
import { UserRoleName } from 'src/user/domain';
import {
  AddCategoryHandler,
  GetCategoriesHandler,
  GetCategoryHandler,
  UpdateCategoryHandler,
} from '../../operation';
import {
  AddCategorySuccessView,
  AddCategoryView,
  CategoriesView,
  EditCategorySuccessView,
  EditCategoryView,
} from './views';
import { Response } from 'express';
import { CategoryDtoMapper } from './dto-mapper';
import { AddCategoryDto, UpdateCategoryDto } from './dto';

@Roles([UserRoleName.ADMIN])
@Controller('admin/categories')
export class CategoriesAdminController {
  constructor(
    private readonly getCategoriesHandler: GetCategoriesHandler,
    private readonly getCategoryHandler: GetCategoryHandler,
    private readonly addCategoryHandler: AddCategoryHandler,
    private readonly updateCategoryHandler: UpdateCategoryHandler,
    private readonly categoriesView: CategoriesView,
    private readonly addCategoryView: AddCategoryView,
    private readonly addCategorySuccessView: AddCategorySuccessView,
    private readonly editCategoryView: EditCategoryView,
    private readonly editCategorySuccessView: EditCategorySuccessView,
  ) {}

  @Get()
  async getCategoriesPage(@Res() response: Response) {
    const dtoMapper = new CategoryDtoMapper();

    const categories = await this.getCategoriesHandler.handle();

    return this.categoriesView.render(response, {
      categories: categories.map(dtoMapper.toDto.bind(dtoMapper)),
    });
  }

  @Get('edit/success')
  async getEditSuccessPage(@Res() response: Response) {
    return this.editCategorySuccessView.render(response);
  }

  @Get('edit/:paperId')
  async getEditPage(
    @Param('paperId') paperId: string,
    @Res() response: Response,
  ) {
    const dtoMapper = new CategoryDtoMapper();

    const category = await this.getCategoryHandler.handle(paperId);

    return this.editCategoryView.render(response, {
      category: dtoMapper.toDto(category),
    });
  }

  @Get('add')
  async getAddCategoryPage(@Res() response: Response) {
    return this.addCategoryView.render(response);
  }

  @Post()
  async addCategory(@Body() dto: AddCategoryDto, @Res() response: Response) {
    await this.addCategoryHandler.handle(dto);

    return response.redirect('/admin/categories/add/success');
  }

  @Get('add/success')
  getAddCategorySuccessPage(@Res() response: Response) {
    return this.addCategorySuccessView.render(response);
  }

  @Post(':categoryId')
  async updateCategory(
    @Param('categoryId') categoryId: string,
    @Body() dto: UpdateCategoryDto,
    @Res() response: Response,
  ) {
    await this.updateCategoryHandler.handle({ id: categoryId, name: dto.name });

    return response.redirect('/admin/categories/edit/success');
  }
}
