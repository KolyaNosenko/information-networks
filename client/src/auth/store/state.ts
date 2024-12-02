import { LoadingStatuses } from '../../common/entities';

export type AuthState = {
  isAuthorized: boolean;
  loginLoadingStatus: LoadingStatuses;
  signUpLoadingStatus: LoadingStatuses;
};

export const authInitialState: AuthState = {
  isAuthorized: false,
  loginLoadingStatus: LoadingStatuses.NONE,
  signUpLoadingStatus: LoadingStatuses.NONE,
};
