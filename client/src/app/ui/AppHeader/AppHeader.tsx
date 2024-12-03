import {
  Header,
  LibraryIcon,
  Nav,
  NavLink,
  NavList,
  NavListItem,
  UserAvatar,
} from './styled';
import { IsAuthorized } from '../../../auth/ui/components';
import { Logo } from '../../../common/ui/components';

const AppHeader = () => {
  return (
    <Header>
      <Logo />
      <IsAuthorized>
        <Nav>
          <NavList>
            <NavListItem>
              <NavLink to="/library">
                <LibraryIcon />
              </NavLink>
            </NavListItem>
          </NavList>
          {/* TODO add dynamic */}
          <UserAvatar>KN</UserAvatar>
        </Nav>
      </IsAuthorized>
    </Header>
  );
};

export default AppHeader;
