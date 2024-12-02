import { LoadingStatuses } from '../../common/entities';
import { Paper } from '../entities';

export type PapersState = {
  entities: Record<string, Paper>;
  loadingStatus: LoadingStatuses;
};

export const papersInitialState: PapersState = {
  entities: {},
  loadingStatus: LoadingStatuses.NONE,
};
