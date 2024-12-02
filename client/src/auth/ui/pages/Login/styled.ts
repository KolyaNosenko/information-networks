import styled from '@emotion/styled';
import { Button, TextField, Typography } from '@mui/material';

export const Root = styled.div`
  padding: 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled(Typography)`
  text-align: center;
  font-size: 48px;
  margin-bottom: 20px;
`;

export const InputField = styled(TextField)`
  width: 100%;
  margin-bottom: 30px;
`;

export const Submit = styled(Button)`
  width: 100%;
  margin-bottom: 20px;
`;
