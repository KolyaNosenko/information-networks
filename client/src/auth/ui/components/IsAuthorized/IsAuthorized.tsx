import { ReactNode } from 'react';

import { useIsAuthorized } from '../../../hooks';

export type IsAuthorizedProps = {
  children: ReactNode;
};

const IsAuthorized = ({ children }: IsAuthorizedProps) => {
  const { isAuthorized } = useIsAuthorized();

  return isAuthorized ? <>{children}</> : null;
};

export default IsAuthorized;
