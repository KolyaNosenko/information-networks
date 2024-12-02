import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router';

import { Main } from './styled.tsx';
import { CssBaseline } from '../../../common/ui/components';
import { ThemeProvider } from '../../../theme/context';
import { Services, ServicesProvider, StoreProvider } from '../../context';
import { AppStore } from '../../store';

export type AppContainerProps = {
  children: ReactNode;
  services: Services;
  store: AppStore;
};

const AppContainer = ({ children, services, store }: AppContainerProps) => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <ServicesProvider services={services}>
        <StoreProvider store={store}>
          <BrowserRouter>
            <Main>{children}</Main>
          </BrowserRouter>
        </StoreProvider>
      </ServicesProvider>
    </ThemeProvider>
  );
};

export default AppContainer;
