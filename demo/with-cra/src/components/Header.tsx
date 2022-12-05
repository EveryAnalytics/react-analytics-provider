import styled from '@emotion/styled';
import {useAnalyticsContext} from '@every-analytics/react-analytics-provider';
import {useNavigate} from 'react-router-dom';

export default function Header() {
  const analytics = useAnalyticsContext();
  const navigate = useNavigate();
  const handleLogoClick = () => {
    analytics.event('logo');
    navigate('/');
  };

  const handleCartClick = () => {
    analytics.event('cart');
    navigate('/cart');
  };

  const handleLoginClick = () => {
    analytics.event('login');
    navigate('/login');
  };

  return (
    <PageHeader>
      <Title>
        <Link onClick={handleLogoClick}>Fruit Store</Link>
      </Title>
      <Nav>
        <Ul>
          <Li onClick={handleCartClick}>
            <Link>Cart</Link>
          </Li>
          <Li onClick={handleLoginClick}>
            <Link>Login</Link>
          </Li>
        </Ul>
      </Nav>
    </PageHeader>
  );
}

const PageHeader = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 6rem;
  background-color: #ffffff;
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.08);
`;

const Title = styled.h1`
  margin: 0;
  margin-left: 24px;
  flex: 1;
  font-size: 3.2rem;
  font-weight: bold;
`;

const Link = styled.a``;

const Nav = styled.nav`
  margin-right: 24px;
`;

const Ul = styled.ul``;

const Li = styled.li`
  display: inline-block;
  margin-left: 16px;
  padding: 8px;
  font-weight: 600;
  &:hover {
    color: #0095f6;
  }
`;
