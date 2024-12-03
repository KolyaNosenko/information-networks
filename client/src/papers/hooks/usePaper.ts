import { useEffect } from 'react';

import { useDispatch, useSelector } from '../../app/hooks';
import { fetchPapers } from '../store/actions.ts';
import { getPaperById, getPapersLoadingStatus } from '../store/selectors.ts';

export const usePaper = (paperId: string) => {
  const dispatch = useDispatch();
  const paper = useSelector(getPaperById(paperId));
  const loadingStatus = useSelector(getPapersLoadingStatus);

  useEffect(() => {
    dispatch(fetchPapers());
  }, [dispatch]);

  return {
    paper,
    loadingStatus,
  };
};
