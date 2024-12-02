import AppContainer from '../AppContainer';
import AppLayout from '../AppLayout';
import '../../../assets/styles/reset.css';

import { useState } from 'react';

import {
  AuthService,
  HttpClientWithSessionRefresh,
} from '../../../auth/services';
import { AxiosHttpClient } from '../../../common/http-client';
import { PersistentStorage } from '../../../common/services';
import { LibraryService } from '../../../library/services';
import { PaperService } from '../../../papers/services';
import { config, Services } from '../../context';
import { AppStore, createStore } from '../../store';
import AppRoutes from '../AppRoutes';

const initServices = (): Services => {
  const httpClient = HttpClientWithSessionRefresh.getInstance(
    new AxiosHttpClient(config.apiUrl),
  );

  const persistentStorage = new PersistentStorage();

  const authService = new AuthService(httpClient, persistentStorage);
  const paperService = new PaperService(httpClient);
  const libraryService = new LibraryService(httpClient);

  return {
    authService,
    paperService,
    libraryService,
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
