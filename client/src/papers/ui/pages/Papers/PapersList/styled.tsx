import styled from '@emotion/styled';

import { PaperCard, PaperCardLoader } from '../../../components';

export const Root = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-right: -10px;
  margin-left: -10px;
  margin-bottom: -10px;
`;

export const ListItem = styled.li`
  max-width: 100%;
  flex: 0 0 auto;
  width: calc(100% / 4);
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
`;

export const Card = styled(PaperCard)`
  height: 100%;
`;

export const CardLoader = styled(PaperCardLoader)``;
