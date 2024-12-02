import styled from '@emotion/styled';
import { TextField, Typography } from '@mui/material';

export const Root = styled.div`
  padding: 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled(Typography)`
  font-size: 48px;
  margin-bottom: 20px;
  text-align: center;
`;

export const InputField = styled(TextField)`
  margin-bottom: 30px;
`;
