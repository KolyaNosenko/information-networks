import { AppState } from '../../app/store/state.ts';

export const getIsAuthorized = (state: AppState) => {
  return state.auth.isAuthorized;
};

export const getLoginLoadingStatus = (state: AppState) => {
  return state.auth.loginLoadingStatus;
};

export const getSignUpLoadingStatus = (state: AppState) => {
  return state.auth.signUpLoadingStatus;
};
