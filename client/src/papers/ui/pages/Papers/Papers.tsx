import PapersList from './PapersList';
import { Body, Root, Toolbar } from './styled.tsx';

const Papers = () => {
  return (
    <Root>
      <Toolbar />
      <Body>
        <PapersList />
      </Body>
    </Root>
  );
};

export default Papers;
