import styled from '@emotion/styled';
import { Card, CardContent, Typography, IconButton } from '@mui/material';

import HeartOutlinedIcon from '../../../../assets/heart-outlined.svg?react';

export const Root = styled(Card)`
  display: flex;
  flex-direction: column;
`;

export const Content = styled(CardContent)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding-top: 0;
`;

export const CaptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Caption = styled.img``;

export const Name = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
  line-height: 125%;
  margin-bottom: 10px;
`;

export const AuthorWrapper = styled.div`
  margin-top: auto;
`;

export const AuthorLabel = styled.span`
  font-size: 14px;
  font-weight: 700;
`;

export const Author = styled(Typography)`
  font-size: 14px;
  color: ${({ theme }) => {
    // TODO change
    // @ts-ignore
    return theme.palette.text.secondary;
  }};
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
  padding: 4px;
`;

export const HeartButton = styled(IconButton)`
  padding: 4px;
`;

export const HeartOutlined = styled(HeartOutlinedIcon)`
  width: 24px;
  height: 24px;
`;
