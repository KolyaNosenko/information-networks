import { LoadingStatuses } from '../../common/entities';
import { LibraryEntry } from '../entities';

export type LibraryState = {
  entities: Record<string, LibraryEntry>;
  setupStatus: LoadingStatuses;
  addStatus: LoadingStatuses;
  updateStatus: LoadingStatuses;
  removeStatus: LoadingStatuses;
};

export const libraryInitialState: LibraryState = {
  entities: {},
  setupStatus: LoadingStatuses.NONE,
  addStatus: LoadingStatuses.NONE,
  updateStatus: LoadingStatuses.NONE,
  removeStatus: LoadingStatuses.NONE,
};
