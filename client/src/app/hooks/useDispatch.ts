import { useDispatch as libUseDispatch } from 'react-redux';

import { AppDispatch } from '../store/actions';

export const useDispatch = libUseDispatch.withTypes<AppDispatch>();
