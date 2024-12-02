import { useCallback } from 'react';

import { useDispatch, useSelector } from '../../app/hooks';
import { SignUpParams } from '../entities';
import { signUp as doSignUp } from '../store/actions.ts';
import { getSignUpLoadingStatus } from '../store/selectors.ts';

export function useSignUp() {
  const dispatch = useDispatch();
  const loadingStatus = useSelector(getSignUpLoadingStatus);

  const signUp = useCallback(
    (params: SignUpParams) => {
      dispatch(doSignUp(params));
    },
    [dispatch],
  );

  return { signUp, loadingStatus };
}
