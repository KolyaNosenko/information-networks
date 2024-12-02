import PapersList from './PapersList';
import { Body, Root, Toolbar } from './styled.tsx';
import { LoadingStatuses } from '../../../../common/entities';
import { useAddToLibrary } from '../../../../library/hooks';
import { usePapers } from '../../../hooks';

const Papers = () => {
  const { papers, loadingStatus } = usePapers();
  const { addToLibrary } = useAddToLibrary();

  const isLoaded = loadingStatus === LoadingStatuses.FULFILLED;

  return (
    <Root>
      <Toolbar />
      <Body>
        <PapersList
          papers={papers}
          isLoaded={isLoaded}
          onAddToLibrary={addToLibrary}
        />
      </Body>
    </Root>
  );
};

export default Papers;
