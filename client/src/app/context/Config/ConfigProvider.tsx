import { createContext, ReactNode } from 'react';

export type Config = {
  apiUrl: string;
};

export const config: Config = {
  apiUrl: 'http://localhost:3003',
};

export type ConfigProviderProps = {
  children: ReactNode;
};

export const ConfigContext = createContext<Config>(undefined!);

const ConfigProvider = ({ children }: ConfigProviderProps) => {
  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
};

export default ConfigProvider;
