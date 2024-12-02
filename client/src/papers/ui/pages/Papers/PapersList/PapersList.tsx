import { Root, List, ListItem, Card, CardLoader } from './styled';
import { Paper } from '../../../../entities';

export type PapersListProps = {
  papers: Paper[];
  isLoaded: boolean;
  className?: string;
};

const PapersList = ({ className, papers, isLoaded }: PapersListProps) => {
  if (!isLoaded) {
    const loaderItems = new Array(10).fill(0);

    return (
      <Root className={className}>
        <List>
          {loaderItems.map((_, index) => (
            <ListItem key={index}>
              <CardLoader />
            </ListItem>
          ))}
        </List>
      </Root>
    );
  }

  return (
    <Root className={className}>
      <List>
        {papers.map((paper) => (
          <ListItem key={paper.id}>
            <Card {...paper} />
          </ListItem>
        ))}
      </List>
    </Root>
  );
};

export default PapersList;
