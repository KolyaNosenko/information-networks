import { AppState } from '../../app/store/state.ts';

export const getCategories = (state: AppState) => {
  return Object.values(state.categories.entities);
};

export const getCategoriesLoadingStatus = (state: AppState) => {
  return state.categories.loadingStatus;
};
