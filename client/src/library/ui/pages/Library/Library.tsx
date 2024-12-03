import LibraryEntryList from './LibraryEntryList';
import { Root } from './styled.tsx';
import {
  useLibrary,
  useRemoveFromLibrary,
  useUpdateLibraryEntry,
} from '../../../hooks';

export const Library = () => {
  const { entries } = useLibrary();
  const { removeFromLibrary } = useRemoveFromLibrary();
  const { updateLibraryEntry } = useUpdateLibraryEntry();

  const onRemove = (entryId: string) => {
    removeFromLibrary(entryId);
  };

  const onUpdateProgress = (params: { entryId: string; progress: number }) => {
    updateLibraryEntry({ progress: params.progress, entryId: params.entryId });
  };

  const onMarkAsRead = (entryId: string) => {
    updateLibraryEntry({ isRead: true, entryId });
  };

  return (
    <Root>
      <LibraryEntryList
        onRemove={onRemove}
        onUpdateProgress={onUpdateProgress}
        onMarkAsRead={onMarkAsRead}
        entries={entries}
      />
    </Root>
  );
};

export default Library;
