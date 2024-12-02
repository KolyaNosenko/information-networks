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
`;

export const Search = styled(TextField)``;

export const SearchIcon = styled(Icon)`
  width: 16px;
  height: 16px;
  color: #ffffff;
`;

export const Categories = styled.div``;

export const CategoriesList = styled.ul``;

export const CategoriesListItem = styled.li``;

export const Category = styled(Chip)``;
