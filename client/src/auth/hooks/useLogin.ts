import { useCallback } from 'react';

import { useDispatch, useSelector } from '../../app/hooks';
import { LoginParams } from '../entities';
import { login as doLogin } from '../store/actions.ts';
import { getLoginLoadingStatus } from '../store/selectors.ts';

export function useLogin() {
  const dispatch = useDispatch();
  const loadingStatus = useSelector(getLoginLoadingStatus);

  const login = useCallback(
    (params: LoginParams) => {
      dispatch(doLogin(params));
    },
    [dispatch],
  );

  return { login, loadingStatus };
}
