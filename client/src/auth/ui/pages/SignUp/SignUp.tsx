import { Button } from '@mui/material';
import { useFormik } from 'formik';

import { Root, Form, Title, InputField } from './styled';

const SignUp = () => {
  const { handleSubmit, getFieldProps } = useFormik<{
    email: string;
    password: string;
  }>({
    initialValues: { email: '', password: '' },
    onSubmit: async (values) => {
      console.log('values', values);
    },
  });

  return (
    <Root>
      <Title variant="h1">Sign up</Title>
      <Form onSubmit={handleSubmit}>
        <InputField
          id="email"
          {...getFieldProps('email')}
          label="Email"
          name="email"
        />
        <InputField
          id="password"
          {...getFieldProps('password')}
          label="Password"
          name="password"
        />
        <Button type="submit" variant="contained" size="large">
          Submit
        </Button>
      </Form>
    </Root>
  );
};

export default SignUp;
