import { Navigate } from 'react-router';

const AppUnknownRoute = () => {
  return <Navigate replace to="/" />;
};

export default AppUnknownRoute;
