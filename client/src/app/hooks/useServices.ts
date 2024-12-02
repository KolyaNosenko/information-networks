import { useContext } from 'react';

import { ServicesContext } from '../context';

export const useServices = () => useContext(ServicesContext);
