import styled from '@emotion/styled';
import { Card, CardActions, CardContent, Typography } from '@mui/material';

export const Root = styled(Card)`
  display: flex;
`;

export const Content = styled(CardContent)`
  display: flex;
`;

export const Actions = styled(CardActions)`
  margin-left: auto;
`;

export const Name = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
`;

export const Author = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
`;

export const CoverWrapper = styled.div`
  flex-shrink: 0;
  margin-right: 15px;
`;

export const Cover = styled.img``;
