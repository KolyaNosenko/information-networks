import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { AppStore } from '../../store';

export type StoreProviderProps = {
  children?: ReactNode;
  store: AppStore;
};

const StoreProvider = ({ children, store }: StoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
