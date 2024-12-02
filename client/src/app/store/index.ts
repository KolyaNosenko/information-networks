import { configureStore } from '@reduxjs/toolkit';

import { Services } from '../context';
import { createRootReducer } from './reducer.ts';
import { unauthorizedListener } from '../../auth/store/middlewares';

export const createStore = ({ services }: { services: Services }) => {
  const rootReducer = createRootReducer({ services });

  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: { services },
        },
      }).concat(unauthorizedListener(services.authService)),
  });
};

export type AppStore = ReturnType<typeof createStore>;
