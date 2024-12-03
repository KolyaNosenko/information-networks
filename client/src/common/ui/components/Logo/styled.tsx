import { Link } from 'react-router';

import styled from '@emotion/styled';

import PaperBall from '../../../../assets/paper-ball.svg?react';

export const Root = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(PaperBall)`
  width: 32px;
  height: 32px;
  fill: #ffffff;
  margin-right: 8px;
`;

export const Text = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
