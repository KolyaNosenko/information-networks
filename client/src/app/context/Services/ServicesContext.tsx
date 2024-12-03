import { createContext, ReactNode } from 'react';

import { AuthService } from '../../../auth/services';
import { CategoriesService } from '../../../categories/services';
import { LibraryService } from '../../../library/services';
import { PaperService } from '../../../papers/services';

export type Services = {
  authService: AuthService;
  categoriesService: CategoriesService;
  paperService: PaperService;
  libraryService: LibraryService;
};

export const ServicesContext = createContext<Services>(undefined!);

type ServicesProviderProps = {
  children: ReactNode;
  services: Services;
};

export const ServicesProvider = ({
  children,
  services,
}: ServicesProviderProps) => {
  return (
    <ServicesContext.Provider value={services}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
