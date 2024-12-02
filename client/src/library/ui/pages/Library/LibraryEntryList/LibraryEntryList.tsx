import { List, ListItem, Root, Card } from './styled.tsx';

export type LibraryListProps = {
  className?: string;
};

const LibraryEntryList = ({ className }: LibraryListProps) => {
  return (
    <Root className={className}>
      <List>
        <ListItem>
          <Card />
        </ListItem>
      </List>
    </Root>
  );
};

export default LibraryEntryList;
