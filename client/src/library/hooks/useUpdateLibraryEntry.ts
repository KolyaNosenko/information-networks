import { useCallback } from 'react';

import { useDispatch, useSelector } from '../../app/hooks';
import { UpdateLibraryEntryParams } from '../entities';
import { updateLibraryEntry as doUpdateLibraryEntry } from '../store/actions.ts';
import { getLibraryUpdateStatus } from '../store/selectors.ts';

export const useUpdateLibraryEntry = () => {
  const dispatch = useDispatch();

  const updateStatus = useSelector(getLibraryUpdateStatus);

  const updateLibraryEntry = useCallback(
    (params: UpdateLibraryEntryParams) => {
      dispatch(doUpdateLibraryEntry(params));
    },
    [dispatch],
  );

  return {
    updateLibraryEntry,
    updateStatus,
  };
};
