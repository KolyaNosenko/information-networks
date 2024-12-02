import { AppState } from '../../app/store/state.ts';

export const getLibraryEntries = (state: AppState) => {
  return Object.values(state.library.entities);
};

export const getLibrarySetupStatus = (state: AppState) => {
  return state.library.setupStatus;
};

export const getLibraryAddStatus = (state: AppState) => {
  return state.library.addStatus;
};

export const getLibraryUpdateStatus = (state: AppState) => {
  return state.library.updateStatus;
};

export const getLibraryRemoveStatus = (state: AppState) => {
  return state.library.removeStatus;
};
