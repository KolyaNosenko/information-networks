import { useEffect } from 'react';

import { useDispatch, useSelector } from '../../app/hooks';
import { fetchPapers } from '../store/actions.ts';
import { getPapers, getPapersLoadingStatus } from '../store/selectors.ts';

export function usePapers() {
  const dispatch = useDispatch();
  const papers = useSelector(getPapers);
  const loadingStatus = useSelector(getPapersLoadingStatus);

  useEffect(() => {
    dispatch(fetchPapers());
  }, [dispatch]);

  return { papers, loadingStatus };
}
