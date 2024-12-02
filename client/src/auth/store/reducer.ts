import { createReducer } from '@reduxjs/toolkit';

import { login, signUp } from './actions.ts';
import { authInitialState, AuthState } from './state.ts';
import { LoadingStatuses } from '../../common/entities';

export const createAuthReducer = (data: Partial<AuthState> = {}) => {
  const initialState = {
    ...authInitialState,
    ...data,
  };

  return createReducer(initialState, (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loginLoadingStatus = LoadingStatuses.PENDING;
      })
      .addCase(login.fulfilled, (state) => {
        state.loginLoadingStatus = LoadingStatuses.FULFILLED;
      })
      .addCase(login.rejected, (state) => {
        state.loginLoadingStatus = LoadingStatuses.FAILED;
      })

      .addCase(signUp.pending, (state) => {
        state.signUpLoadingStatus = LoadingStatuses.PENDING;
      })
      .addCase(signUp.fulfilled, (state) => {
        state.signUpLoadingStatus = LoadingStatuses.FULFILLED;
      })
      .addCase(signUp.rejected, (state) => {
        state.signUpLoadingStatus = LoadingStatuses.FAILED;
      });
  });
};
