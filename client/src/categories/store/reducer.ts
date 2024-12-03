import { createReducer } from '@reduxjs/toolkit';

import { fetchCategories } from './actions.ts';
import { categoriesInitialState } from './state.ts';
import { LoadingStatuses } from '../../common/entities';

export const categoriesReducer = createReducer(
  categoriesInitialState,
  (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loadingStatus = LoadingStatuses.PENDING;
      })
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.entities = payload.reduce(
          (acc, category) => ({ ...acc, [category.id]: category }),
          {},
        );

        state.loadingStatus = LoadingStatuses.FULFILLED;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.loadingStatus = LoadingStatuses.FAILED;
      });
  },
);
