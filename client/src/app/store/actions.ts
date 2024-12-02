import {
  Action,
  createAsyncThunk as libCreateAsyncThunk,
  ThunkDispatch,
} from '@reduxjs/toolkit';

import { AppState } from './state.ts';
import { Services } from '../context';

export type AppDispatch = ThunkDispatch<
  AppState,
  { services: Services },
  Action
>;

export const createAsyncThunk = libCreateAsyncThunk.withTypes<{
  state: AppState;
  dispatch: AppDispatch;
  extra: { services: Services };
}>();
