import { createReducer } from '@reduxjs/toolkit';

import { fetchPapers } from './actions.ts';
import { papersInitialState } from './state.ts';
import { LoadingStatuses } from '../../common/entities';

export const papersReducer = createReducer(papersInitialState, (builder) => {
  builder
    .addCase(fetchPapers.pending, (state) => {
      state.loadingStatus = LoadingStatuses.PENDING;
    })
    .addCase(fetchPapers.fulfilled, (state, { payload }) => {
      state.entities = payload.reduce(
        (acc, paper) => ({ ...acc, [paper.id]: paper }),
        {},
      );

      state.loadingStatus = LoadingStatuses.FULFILLED;
    })
    .addCase(fetchPapers.rejected, (state) => {
      state.loadingStatus = LoadingStatuses.FAILED;
    });
});
