import { Link } from 'react-router';

import styled from '@emotion/styled';

import EnterSvg from '../../../assets/enter.svg?react';
import LibrarySvg from '../../../assets/library.svg?react';

export const Header = styled.header`
  background-color: ${({ theme }) => {
    // TODO change
    // @ts-ignore
    return theme.palette.primary.main;
  }};
`;

export const Content = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  display: flex;
  align-items: center;
  //  TODO move to palette
  color: #fff;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  margin-right: -8px;
`;

export const NavListItem = styled.li`
  padding-right: 8px;
  line-height: 0;
`;

export const NavLink = styled(Link)``;

export const LibraryIcon = styled(LibrarySvg)`
  fill: #ffffff;
  width: 24px;
  height: 24px;
`;

export const EnterIcon = styled(EnterSvg)`
  fill: #ffffff;
  width: 24px;
  height: 24px;
`;
