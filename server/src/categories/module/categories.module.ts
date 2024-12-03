import { Module } from '@nestjs/common';
import { PrismaCategoriesStorage } from '../infrastructure';
import {
  CategoriesController,
  CategoriesAdminController,
  CategoriesView,
  AddCategoryView,
  AddCategorySuccessView,
  EditCategoryView,
  EditCategorySuccessView,
} from '../ui';
import { CategoriesService, CategoriesStorage } from '../services';
import {
  GetCategoriesHandler,
  AddCategoryHandler,
  RemoveCategoryHandler,
  UpdateCategoryHandler,
  GetCategoryHandler,
} from '../operation';

@Module({
  controllers: [CategoriesController, CategoriesAdminController],
  providers: [
    PrismaCategoriesStorage,
    CategoriesView,
    AddCategoryView,
    AddCategorySuccessView,
    EditCategoryView,
    EditCategorySuccessView,
    {
      provide: CategoriesService,
      inject: [PrismaCategoriesStorage],
      useFactory: (categoriesStorage: CategoriesStorage) => {
        return new CategoriesService(categoriesStorage);
      },
    },
    {
      provide: GetCategoriesHandler,
      inject: [CategoriesService],
      useFactory: (categoriesService: CategoriesService) => {
        return new GetCategoriesHandler(categoriesService);
      },
    },
    {
      provide: GetCategoryHandler,
      inject: [CategoriesService],
      useFactory: (categoriesService: CategoriesService) => {
        return new GetCategoryHandler(categoriesService);
      },
    },
    {
      provide: AddCategoryHandler,
      inject: [CategoriesService],
      useFactory: (categoriesService: CategoriesService) => {
        return new AddCategoryHandler(categoriesService);
      },
    },
    {
      provide: UpdateCategoryHandler,
      inject: [CategoriesService],
      useFactory: (categoriesService: CategoriesService) => {
        return new UpdateCategoryHandler(categoriesService);
      },
    },
    {
      provide: RemoveCategoryHandler,
      inject: [CategoriesService],
      useFactory: (categoriesService: CategoriesService) => {
        return new RemoveCategoryHandler(categoriesService);
      },
    },
  ],
})
export class CategoriesModule {}
