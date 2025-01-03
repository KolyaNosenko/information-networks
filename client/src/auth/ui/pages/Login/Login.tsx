import { Link } from '@mui/material';
import { useFormik } from 'formik';

import { Root, Form, Title, InputField, Submit } from './styled';
import { useLogin } from '../../../hooks';

const Login = () => {
  const { login } = useLogin();

  const { handleSubmit, getFieldProps } = useFormik<{
    email: string;
    password: string;
  }>({
    initialValues: { email: '', password: '' },
    onSubmit: async (values) => {
      login({ email: values.email, password: values.password });
    },
  });

  return (
    <Root>
      <Title variant="h1">Sign in</Title>
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
        <Submit type="submit" variant="contained" size="large">
          Submit
        </Submit>
        <Link href="/sign-up">Create new account</Link>
      </Form>
    </Root>
  );
};

export default Login;
