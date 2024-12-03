import {
  Content,
  Header,
  LibraryIcon,
  Nav,
  NavLink,
  NavList,
  NavListItem,
} from './styled';
import { IsAuthorized } from '../../../auth/ui/components';
import { Logo } from '../../../common/ui/components';

const AppHeader = () => {
  return (
    <Header>
      <Content>
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
          </Nav>
        </IsAuthorized>
      </Content>
    </Header>
  );
};

export default AppHeader;
