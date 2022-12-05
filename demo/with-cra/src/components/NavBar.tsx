import React from 'react';
import {useAnalyticsContext} from '@every-analytics/react-analytics-provider';
import navigate from '../router/navigate';

const NavBar = () => {
  const analytics = useAnalyticsContext();

  return (
    <header className="App-header">
      <NavItem
        href="/"
        onClick={() => {
          analytics.event('Click logo');
        }}
      >
        Fruit Store
      </NavItem>
      <NavItem
        href="/products?color=red"
        onClick={() => {
          analytics.event('Click products', {color: 'red'});
        }}
      >
        Red
      </NavItem>
      <NavItem
        href="/products?color=yellow"
        onClick={() => {
          analytics.event('Click products', {color: 'yellow'});
        }}
      >
        Yellow
      </NavItem>
      <NavItem
        href="/login"
        onClick={() => {
          analytics.event('Click login', {color: 'yellow'});
        }}
      >
        Login
      </NavItem>
      <NavItem
        href="/set-currency"
        onClick={() => {
          analytics.setUserProperties({currency: 'KRW'});
        }}
      >
        Currency
      </NavItem>
      <NavItem href="/mypage">MyPage</NavItem>
    </header>
  );
};

const NavItem = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}) => {
  const handleClick = (e: React.MouseEvent) => {
    navigate.push(href);
    onClick?.(e); // NOTE: prettier에서 에러로 인식하네?
  };
  return <button onClick={handleClick}>{children}</button>;
};

export default NavBar;
