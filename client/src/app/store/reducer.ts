import { combineReducers } from '@reduxjs/toolkit';

import { createAuthReducer } from '../../auth/store/reducer.ts';
import { libraryReducer } from '../../library/store/reducer.ts';
import { papersReducer } from '../../papers/store/reducer';

export const createRootReducer = () => {
  return combineReducers({
    // TODO pass dynamic
    auth: createAuthReducer({ isAuthorized: false }),
    papers: papersReducer,
    library: libraryReducer,
  });
};
