import styled from '@emotion/styled';
import { Typography } from '@mui/material';

import LibraryEntryList from './LibraryEntryList';

export const Root = styled.div`
  padding: 20px;
`;

export const Title = styled(Typography)`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 40px;
`;

export const EntryList = styled(LibraryEntryList)`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;
