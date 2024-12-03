import { useEffect } from 'react';

import { useDispatch, useSelector } from '../../app/hooks';
import { fetchCategories } from '../store/actions.ts';
import {
  getCategories,
  getCategoriesLoadingStatus,
} from '../store/selectors.ts';

export const useCategories = () => {
  const dispatch = useDispatch();

  const categories = useSelector(getCategories);
  const loadingStatus = useSelector(getCategoriesLoadingStatus);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return {
    categories,
    loadingStatus,
  };
};
