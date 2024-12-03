import styled from '@emotion/styled';
import { Chip, TextField } from '@mui/material';

import Icon from '../../../../../assets/search.svg?react';

export const Root = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 15px;
`;

export const SearchWrapper = styled.div`
  flex-shrink: 0;
  margin-left: auto;
  margin-bottom: auto;
`;

export const Search = styled(TextField)``;

export const SearchIcon = styled(Icon)`
  width: 16px;
  height: 16px;
  color: #ffffff;
`;

export const Categories = styled.div``;

export const CategoriesList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-bottom: -10px;
`;

export const CategoriesListItem = styled.li`
  padding-right: 15px;
  padding-bottom: 10px;
`;

export const Category = styled(Chip)``;
