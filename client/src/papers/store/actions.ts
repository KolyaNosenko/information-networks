import { createAsyncThunk } from '../../app/store/actions.ts';
import { Paper } from '../entities';

export const papersActionsAlias = 'papers';

export const fetchPapers = createAsyncThunk<Paper[], void>(
  `${papersActionsAlias}/FETCH`,
  async (_, { extra, rejectWithValue }) => {
    const { paperService } = extra.services;

    try {
      return paperService.getPapers();
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
