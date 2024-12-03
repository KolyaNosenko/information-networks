import { Route, Routes } from 'react-router';

import { Login, SignUp } from '../../../auth/ui/pages';
import { Papers } from '../../../papers/ui/pages';
import AppUnknownRoute from '../AppUnknownRoute';

const UnauthorizedMain = () => {
  return (
    <Routes>
      <Route path="sign-up" element={<SignUp />} />
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Papers />} />
      <Route path="*" element={<AppUnknownRoute />} />
    </Routes>
  );
};

export default UnauthorizedMain;
