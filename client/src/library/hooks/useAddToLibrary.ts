import { useCallback } from 'react';

import { useDispatch, useSelector } from '../../app/hooks';
import { addToLibrary as doAddToLibrary } from '../store/actions.ts';
import { getLibraryAddStatus } from '../store/selectors.ts';

export const useAddToLibrary = () => {
  const dispatch = useDispatch();

  const addStatus = useSelector(getLibraryAddStatus);

  const addToLibrary = useCallback(
    (paperId: string) => {
      dispatch(doAddToLibrary(paperId));
    },
    [dispatch],
  );

  return {
    addToLibrary,
    addStatus,
  };
};
