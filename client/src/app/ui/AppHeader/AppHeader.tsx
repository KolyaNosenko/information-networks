import {
  Content,
  EnterIcon,
  Header,
  LibraryIcon,
  Nav,
  NavLink,
  NavList,
  NavListItem,
} from './styled';
import { IsAuthorized, IsNotAuthorized } from '../../../auth/ui/components';
import { Logo } from '../../../common/ui/components';

const AppHeader = () => {
  return (
    <Header>
      <Content>
        <Logo />
        <Nav>
          <NavList>
            <NavListItem>
              <IsAuthorized>
                <NavLink to="/library">
                  <LibraryIcon />
                </NavLink>
              </IsAuthorized>
              <IsNotAuthorized>
                <NavLink to="/login">
                  <EnterIcon />
                </NavLink>
              </IsNotAuthorized>
            </NavListItem>
          </NavList>
        </Nav>
      </Content>
    </Header>
  );
};

export default AppHeader;
