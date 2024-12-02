import styled from '@emotion/styled';

export const Header = styled.header`
  padding: 20px;
  //  TODO move to palette
  color: #fff;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;
