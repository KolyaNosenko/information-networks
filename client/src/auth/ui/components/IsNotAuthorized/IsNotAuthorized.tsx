import { ReactNode } from 'react';

import { useIsAuthorized } from '../../../hooks';

export type IsNotAuthorizedProps = {
  children: ReactNode;
};

const IsNotAuthorized = ({ children }: IsNotAuthorizedProps) => {
  const { isAuthorized } = useIsAuthorized();

  return !isAuthorized ? <>{children}</> : null;
};

export default IsNotAuthorized;
