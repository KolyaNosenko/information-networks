import { AuthState } from '../../auth/store/state.ts';
import { CategoriesState } from '../../categories/store/state.ts';
import { LibraryState } from '../../library/store/state.ts';
import { PapersState } from '../../papers/store/state';

export type AppState = {
  auth: AuthState;
  papers: PapersState;
  categories: CategoriesState;
  library: LibraryState;
};
