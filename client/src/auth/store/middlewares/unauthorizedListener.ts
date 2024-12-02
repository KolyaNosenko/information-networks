import { Middleware } from 'redux';

import { AppState } from '../../../app/store/state.ts';
import { AuthService } from '../../services';
import { unauthorized } from '../actions';
import { getIsAuthorized } from '../selectors';

export const unauthorizedListener =
  (authService: AuthService): Middleware<{}, AppState> =>
  ({ dispatch, getState }) => {
    authService.onUnauthorized((reason: unknown) => {
      const isAuthorized = getIsAuthorized(getState());
      if (isAuthorized) {
        dispatch(unauthorized({ reason }));
      }
    });

    return (next) => (action) => next(action);
  };
