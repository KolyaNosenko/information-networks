import { useSelector as libUseSelector } from 'react-redux';

import { AppState } from '../store/state';

export const useSelector = libUseSelector.withTypes<AppState>();
