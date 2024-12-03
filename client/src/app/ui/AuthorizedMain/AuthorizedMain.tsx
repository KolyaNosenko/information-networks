import { useEffect } from 'react';
import { Route, Routes } from 'react-router';

import { useLibrary } from '../../../library/hooks';
import { Library } from '../../../library/ui/pages';
import { Paper, Papers } from '../../../papers/ui/pages';
import AppUnknownRoute from '../AppUnknownRoute';

const AuthorizedMain = () => {
  const { setupLibrary } = useLibrary();

  useEffect(() => {
    setupLibrary();
  }, [setupLibrary]);

  return (
    <Routes>
      <Route path="library" element={<Library />} />
      <Route path="paper/:id" element={<Paper />} />
      <Route path="/" element={<Papers />} />
      <Route path="*" element={<AppUnknownRoute />} />
    </Routes>
  );
};

export default AuthorizedMain;
