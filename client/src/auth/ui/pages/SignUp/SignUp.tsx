import { Button } from '@mui/material';
import { useFormik } from 'formik';

import { Root, Form, Title, InputField } from './styled';
import { useSignUp } from '../../../hooks';

const SignUp = () => {
  const { signUp } = useSignUp();

  const { handleSubmit, getFieldProps } = useFormik<{
    name: string;
    email: string;
    password: string;
  }>({
    initialValues: { name: '', email: '', password: '' },
    onSubmit: async (values) => {
      signUp({
        name: values.name,
        email: values.email,
        password: values.password,
      });
    },
  });

  return (
    <Root>
      <Title variant="h1">Sign up</Title>
      <Form onSubmit={handleSubmit}>
        <InputField
          id="name"
          {...getFieldProps('name')}
          label="Name"
          name="name"
        />
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
