import { AppState } from '../../app/store/state.ts';

export const getPapers = (state: AppState) => {
  return Object.values(state.papers.entities);
};

export const getPaperById = (paperId: string) => (state: AppState) => {
  return state.papers.entities[paperId] || null;
};

export const getPapersLoadingStatus = (state: AppState) => {
  return state.papers.loadingStatus;
};
