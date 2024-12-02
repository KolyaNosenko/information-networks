import { useSelector } from '../../app/hooks';
import { getIsAuthorized } from '../store/selectors.ts';

export const useIsAuthorized = () => {
  const isAuthorized = useSelector(getIsAuthorized);

  return {
    isAuthorized,
  };
};
