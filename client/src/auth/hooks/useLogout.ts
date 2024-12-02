import { useCallback } from 'react';

import { useDispatch } from '../../app/hooks';
import { logout as doLogout } from '../store/actions.ts';

export function useLogout() {
  const dispatch = useDispatch();

  const logout = useCallback(() => {
    dispatch(doLogout());
  }, [dispatch]);

  return { logout };
}
