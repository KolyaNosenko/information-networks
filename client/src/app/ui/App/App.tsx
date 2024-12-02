import AppContainer from '../AppContainer';
import AppLayout from '../AppLayout';
import '../../../assets/styles/reset.css';

import { useState } from 'react';

import { AuthService } from '../../../auth/services';
import { AxiosHttpClient } from '../../../common/http-client';
import { PaperService } from '../../../papers/services';
import { Services } from '../../context';
import { AppStore, createStore } from '../../store';
import AppRoutes from '../AppRoutes';

const initServices = (): Services => {
  const httpClient = new AxiosHttpClient('some/url');

  const authService = new AuthService(httpClient);
  const paperService = new PaperService(httpClient);

  return {
    authService,
    paperService,
  };
};

function App() {
  const [services] = useState<Services>(initServices());
  const [store] = useState<AppStore>(createStore({ services }));

  return (
    <AppContainer services={services} store={store}>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </AppContainer>
  );
}

export default App;
