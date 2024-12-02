import { createAction } from '@reduxjs/toolkit';

import { createAsyncThunk } from '../../app/store/actions.ts';
import { LoginParams, SignUpParams } from '../entities';

export const authActionsAlias = 'auth';

export const unauthorized = createAction<{ reason: unknown }>(
  `${authActionsAlias}/UNAUTHORIZED`,
);

export const login = createAsyncThunk<void, LoginParams>(
  `${authActionsAlias}/LOGIN`,
  async (params, { extra, rejectWithValue }) => {
    const { authService } = extra.services;

    try {
      return authService.login(params);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const signUp = createAsyncThunk<void, SignUpParams>(
  `${authActionsAlias}/SIGN_UP`,
  async (params, { extra, rejectWithValue }) => {
    const { authService } = extra.services;

    try {
      return authService.signUp(params);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const logout = createAsyncThunk<void, void>(
  `${authActionsAlias}/LOGOUT`,
  async (_, { extra, rejectWithValue }) => {
    const { authService } = extra.services;

    try {
      return authService.logout();
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
