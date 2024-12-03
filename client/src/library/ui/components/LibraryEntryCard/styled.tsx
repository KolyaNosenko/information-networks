import styled from '@emotion/styled';
import {
  Card,
  CardActions,
  CardContent,
  Slider,
  Typography,
} from '@mui/material';

import LibraryEntryCardMore from './LibraryEntryCardMore';

export const Root = styled(Card)`
  display: flex;
`;

export const Content = styled(CardContent)`
  display: flex;
  flex-grow: 1;
  margin-right: 25px;
`;

export const Actions = styled(CardActions)`
  margin-left: auto;
  flex-shrink: 0;
`;

export const MoreAction = styled(LibraryEntryCardMore)`
  margin-bottom: auto;
`;

export const Info = styled.div`
  flex-grow: 1;
`;

export const Name = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Author = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => {
    // TODO change
    // @ts-ignore
    return theme.palette.text.secondary;
  }};
`;

export const CoverWrapper = styled.div`
  flex-shrink: 0;
  margin-right: 25px;
`;

export const Cover = styled.img``;

export const ReadingProgress = styled.div`
  margin-top: 30px;
`;

export const ReadingProgressTitle = styled(Typography)`
  font-size: 16px;
`;

export const ReadingProgressBar = styled(Slider)``;
