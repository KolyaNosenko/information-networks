import { EntryList, Root, Title } from './styled.tsx';
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
      <Title variant="h1">Your library</Title>
      <EntryList
        onRemove={onRemove}
        onUpdateProgress={onUpdateProgress}
        onMarkAsRead={onMarkAsRead}
        entries={entries}
      />
    </Root>
  );
};

export default Library;
