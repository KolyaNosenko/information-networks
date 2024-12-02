import { configureStore } from '@reduxjs/toolkit';

import { Services } from '../context';
import { rootReducer } from './reducer.ts';

export const createStore = ({ services }: { services: Services }) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: { services },
        },
      }),
  });
};

export type AppStore = ReturnType<typeof createStore>;
