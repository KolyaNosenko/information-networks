import AppContainer from '../AppContainer';
import AppLayout from '../AppLayout';
import '../../../assets/styles/reset.css';
import AppRoutes from '../AppRoutes/AppRoutes.tsx';

import { useState } from 'react';

import { Services } from '../../context';
import { AxiosHttpClient } from '../../../common/http-client';
import { AuthService } from '../../../auth/services';
import { PaperService } from '../../../papers/services';

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

  return (
    <AppContainer services={services}>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </AppContainer>
  );
}

export default App;
