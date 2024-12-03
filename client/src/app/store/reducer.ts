import { combineReducers } from '@reduxjs/toolkit';

import { createAuthReducer } from '../../auth/store/reducer.ts';
import { categoriesReducer } from '../../categories/store/reducer.ts';
import { libraryReducer } from '../../library/store/reducer.ts';
import { papersReducer } from '../../papers/store/reducer';
import { Services } from '../context';

export const createRootReducer = ({ services }: { services: Services }) => {
  const { authService } = services;

  return combineReducers({
    auth: createAuthReducer({ isAuthorized: authService.isAuthorized }),
    categories: categoriesReducer,
    papers: papersReducer,
    library: libraryReducer,
  });
};
