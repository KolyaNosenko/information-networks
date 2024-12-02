import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router';

import { Main } from './styled.tsx';
import { CssBaseline } from '../../../common/ui/components';
import { ThemeProvider } from '../../../theme/context';
import { Services, ServicesProvider } from '../../context';

export type AppContainerProps = {
  children: ReactNode;
  services: Services;
};

const AppContainer = ({ children, services }: AppContainerProps) => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <ServicesProvider services={services}>
        <BrowserRouter>
          <Main>{children}</Main>
        </BrowserRouter>
      </ServicesProvider>
    </ThemeProvider>
  );
};

export default AppContainer;
