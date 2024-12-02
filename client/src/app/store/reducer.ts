import { combineReducers } from '@reduxjs/toolkit';

import { papersReducer } from '../../papers/store/reducer';

export const rootReducer = combineReducers({
  papers: papersReducer,
});
