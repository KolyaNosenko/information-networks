import { ReactNode } from 'react';

import AppHeader from '../AppHeader';

export type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
};

export default AppLayout;
