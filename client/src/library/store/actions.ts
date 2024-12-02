import { createAsyncThunk } from '../../app/store/actions.ts';
import { LibraryEntry, UpdateLibraryEntryParams } from '../entities';

export const libraryActionsAlias = 'library';

export const setupLibrary = createAsyncThunk<LibraryEntry[], void>(
  `${libraryActionsAlias}/SETUP`,
  async (_, { extra, rejectWithValue }) => {
    const { libraryService } = extra.services;

    try {
      return libraryService.getUserLibrary();
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const addToLibrary = createAsyncThunk<LibraryEntry, string>(
  `${libraryActionsAlias}/ADD_TO_LIBRARY`,
  async (paperId, { extra, rejectWithValue }) => {
    const { libraryService } = extra.services;

    try {
      return libraryService.addToLibrary(paperId);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const updateLibraryEntry = createAsyncThunk<
  LibraryEntry,
  UpdateLibraryEntryParams
>(
  `${libraryActionsAlias}/UPDATE`,
  async (params, { extra, rejectWithValue }) => {
    const { libraryService } = extra.services;

    try {
      return libraryService.updateLibraryEntry(params);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const removeFromLibrary = createAsyncThunk<string, string>(
  `${libraryActionsAlias}/REMOVE`,
  async (entryId, { extra, rejectWithValue }) => {
    const { libraryService } = extra.services;

    try {
      await libraryService.removeFromLibrary(entryId);
      return entryId;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
