import { useCallback } from 'react';

import { useDispatch, useSelector } from '../../app/hooks';
import { removeFromLibrary as doRemoveFromLibrary } from '../store/actions.ts';
import { getLibraryRemoveStatus } from '../store/selectors.ts';

export const useRemoveFromLibrary = () => {
  const dispatch = useDispatch();

  const removeStatus = useSelector(getLibraryRemoveStatus);

  const removeFromLibrary = useCallback(
    (entryId: string) => {
      dispatch(doRemoveFromLibrary(entryId));
    },
    [dispatch],
  );

  return {
    removeFromLibrary,
    removeStatus,
  };
};
