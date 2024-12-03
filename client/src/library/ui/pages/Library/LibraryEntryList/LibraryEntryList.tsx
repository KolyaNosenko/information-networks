import { List, ListItem, Root, Card } from './styled.tsx';
import { LibraryEntry } from '../../../../entities';

export type LibraryListProps = {
  className?: string;
  entries: LibraryEntry[];
  onUpdateProgress: (params: { entryId: string; progress: number }) => void;
  onRemove: (entryId: string) => void;
  onMarkAsRead: (entryId: string) => void;
};

const LibraryEntryList = ({
  entries,
  className,
  onUpdateProgress,
  onRemove,
  onMarkAsRead,
}: LibraryListProps) => {
  return (
    <Root className={className}>
      <List>
        {entries.map((entry) => (
          <ListItem key={entry.id}>
            <Card
              onUpdateProgress={(progress) =>
                onUpdateProgress({ progress, entryId: entry.id })
              }
              onRemove={() => onRemove(entry.id)}
              onMarkAsRead={() => onMarkAsRead(entry.id)}
              {...entry}
            />
          </ListItem>
        ))}
      </List>
    </Root>
  );
};

export default LibraryEntryList;
