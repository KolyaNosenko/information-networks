import { Route, Routes } from 'react-router';

import { Login, SignUp } from '../../../auth/ui/pages';
import { Library } from '../../../library/ui/pages';
import { Paper, Papers } from '../../../papers/ui/pages';
import AppUnknownRoute from '../AppUnknownRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/library" element={<Library />} />
      <Route path="/paper/:id" element={<Paper />} />
      <Route path="/" element={<Papers />} />
      <Route path="*" element={<AppUnknownRoute />} />
    </Routes>
  );
};

export default AppRoutes;
