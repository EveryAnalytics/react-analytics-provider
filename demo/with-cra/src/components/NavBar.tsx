// import { logEvent } from "@every-analytics/react-analytics-provider";
import React from 'react';
import navigate from 'router/navigate';
import {useAnalytics} from '@every-analytics/react-analytics-provider';

const NavBar = () => {
  const analytics = useAnalytics();

  return (
    <header className="App-header">
      <NavItem
        href="/"
        onClick={() => {
          analytics.trackEvent('Click logo');
        }}
      >
        Fruit Store
      </NavItem>
      <NavItem
        href="/products?color=red"
        onClick={() => {
          analytics.trackEvent('Click products', {color: 'red'});
        }}
      >
        Red
      </NavItem>
      <NavItem
        href="/products?color=yellow"
        onClick={() => {
          analytics.trackEvent('Click products', {color: 'yellow'});
        }}
      >
        Yellow
      </NavItem>
      <NavItem
        href="/login"
        onClick={() => {
          analytics.trackClick('Click login', {color: 'yellow'});
        }}
      >
        Login
      </NavItem>
      <NavItem
        href="/set-currency"
        onClick={() => {
          analytics.set({currency: 'KRW'});
        }}
      >
        Currency
      </NavItem>
      <NavItem href="/set-user-property">UserProperty</NavItem>
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
