import { createReducer } from '@reduxjs/toolkit';

import {
  addToLibrary,
  removeFromLibrary,
  setupLibrary,
  updateLibraryEntry,
} from './actions.ts';
import { libraryInitialState } from './state.ts';
import { LoadingStatuses } from '../../common/entities';

export const libraryReducer = createReducer(libraryInitialState, (builder) => {
  builder
    .addCase(setupLibrary.pending, (state) => {
      state.setupStatus = LoadingStatuses.PENDING;
    })
    .addCase(setupLibrary.fulfilled, (state, { payload }) => {
      state.entities = payload.reduce(
        (acc, entry) => ({ ...acc, [entry.id]: entry }),
        {},
      );

      state.setupStatus = LoadingStatuses.FULFILLED;
    })
    .addCase(setupLibrary.rejected, (state) => {
      state.setupStatus = LoadingStatuses.FAILED;
    })

    .addCase(addToLibrary.pending, (state) => {
      state.addStatus = LoadingStatuses.PENDING;
    })
    .addCase(addToLibrary.fulfilled, (state, { payload }) => {
      state.entities[payload.id] = payload;
      state.addStatus = LoadingStatuses.FULFILLED;
    })
    .addCase(addToLibrary.rejected, (state) => {
      state.addStatus = LoadingStatuses.FAILED;
    })

    .addCase(updateLibraryEntry.pending, (state) => {
      state.updateStatus = LoadingStatuses.PENDING;
    })
    .addCase(updateLibraryEntry.fulfilled, (state, { payload }) => {
      state.entities[payload.id] = payload;
      state.updateStatus = LoadingStatuses.FULFILLED;
    })
    .addCase(updateLibraryEntry.rejected, (state) => {
      state.updateStatus = LoadingStatuses.FAILED;
    })

    .addCase(removeFromLibrary.pending, (state) => {
      state.removeStatus = LoadingStatuses.PENDING;
    })
    .addCase(removeFromLibrary.fulfilled, (state, { payload: entryId }) => {
      delete state.entities[entryId];
      state.removeStatus = LoadingStatuses.FULFILLED;
    })
    .addCase(removeFromLibrary.rejected, (state) => {
      state.removeStatus = LoadingStatuses.FAILED;
    });
});
