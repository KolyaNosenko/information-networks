import { Link } from 'react-router';

import styled from '@emotion/styled';
import { Avatar } from '@mui/material';

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
`;

export const UserAvatar = styled(Avatar)`
  flex-shrink: 0;
  margin-left: 10px;
`;
