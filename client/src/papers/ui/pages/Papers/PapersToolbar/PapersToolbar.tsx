import { Chip, InputAdornment } from '@mui/material';

import {
  Root,
  SearchWrapper,
  Search,
  SearchIcon,
  Categories,
  CategoriesList,
  CategoriesListItem,
  Category,
} from './styled.tsx';

export type PapersToolbarProps = {
  className?: string;
};

const PapersToolbar = ({ className }: PapersToolbarProps) => {
  return (
    <Root className={className}>
      <Categories>
        <CategoriesList>
          <CategoriesListItem>
            <Category
              label="Software Engeneering"
              onClick={() => console.log('Hii')}
            />
          </CategoriesListItem>
        </CategoriesList>
      </Categories>
      <SearchWrapper>
        <Search
          variant="standard"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />
      </SearchWrapper>
    </Root>
  );
};

export default PapersToolbar;
