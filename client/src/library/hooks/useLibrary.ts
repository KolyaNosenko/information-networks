import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { useDispatch } from '../../app/hooks';
import { setupLibrary as doSetupLibrary } from '../store/actions.ts';
import {
  getLibraryEntries,
  getLibrarySetupStatus,
} from '../store/selectors.ts';

export const useLibrary = () => {
  const dispatch = useDispatch();

  const entries = useSelector(getLibraryEntries);
  const setupStatus = useSelector(getLibrarySetupStatus);

  const setupLibrary = useCallback(() => {
    dispatch(doSetupLibrary());
  }, [dispatch]);

  return {
    setupStatus,
    setupLibrary,
    entries,
  };
};
