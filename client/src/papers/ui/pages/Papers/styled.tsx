import styled from '@emotion/styled';

import PapersList from './PapersList';
import PapersToolbar from './PapersToolbar';

export const Root = styled.div``;

export const Body = styled.div`
  padding: 15px 15px 50px;
`;

export const Toolbar = styled(PapersToolbar)`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const List = styled(PapersList)`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;
