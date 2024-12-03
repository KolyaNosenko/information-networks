import { LoadingStatuses } from '../../common/entities';
import { Category } from '../entities';

export type CategoriesState = {
  entities: Record<string, Category>;
  loadingStatus: LoadingStatuses;
};

export const categoriesInitialState: CategoriesState = {
  entities: {},
  loadingStatus: LoadingStatuses.NONE,
};
