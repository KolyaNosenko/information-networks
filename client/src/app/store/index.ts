import { configureStore } from '@reduxjs/toolkit';

import { Services } from '../context';
import { createRootReducer } from './reducer.ts';

export const createStore = ({ services }: { services: Services }) => {
  const rootReducer = createRootReducer();

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
