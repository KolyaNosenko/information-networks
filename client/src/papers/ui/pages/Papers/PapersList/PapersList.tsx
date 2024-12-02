import { Root, List, ListItem, Card } from './styled';

const PapersList = () => {
  return (
    <Root>
      <List>
        <ListItem>
          <Card />
        </ListItem>
        <ListItem>
          <Card />
        </ListItem>
      </List>
    </Root>
  );
};

export default PapersList;
