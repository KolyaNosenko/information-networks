import { useIsAuthorized } from '../../../auth/hooks';
import AuthorizedMain from '../AuthorizedMain';
import UnauthorizedMain from '../UnauthorizedMain';

const Main = () => {
  const { isAuthorized } = useIsAuthorized();

  if (isAuthorized) {
    return <AuthorizedMain />;
  }

  return <UnauthorizedMain />;
};

export default Main;
