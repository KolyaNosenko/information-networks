import { InputAdornment } from '@mui/material';

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
import { Category as CategoryType } from '../../../../../categories/entities';

export type PapersToolbarProps = {
  className?: string;
  categories: Array<CategoryType>;
};

const PapersToolbar = ({ categories, className }: PapersToolbarProps) => {
  return (
    <Root className={className}>
      <Categories>
        <CategoriesList>
          {categories.map((category) => (
            <CategoriesListItem key={category.id}>
              <Category
                label={category.name}
                onClick={() => console.log('Hii')}
              />
            </CategoriesListItem>
          ))}
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
