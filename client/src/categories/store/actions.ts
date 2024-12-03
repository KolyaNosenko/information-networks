import { createAsyncThunk } from '../../app/store/actions.ts';
import { Category } from '../entities';

export const categoriesActionsAlias = 'categories';

export const fetchCategories = createAsyncThunk<Category[], void>(
  `${categoriesActionsAlias}/FETCH`,
  async (_, { extra, rejectWithValue }) => {
    const { categoriesService } = extra.services;

    try {
      return categoriesService.getCategories();
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
