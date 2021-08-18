// import { logEvent } from "@every-analytics/react-analytics-provider";
import React from 'react';
import navigate from '../router/navigate';
import {useAnalyticsContext, useAnalyticsModalView} from '@every-analytics/react-analytics-provider';

const NavBar = () => {
  const analytics = useAnalyticsContext();
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="App-header">
      <NavItem
        href="/"
        onClick={() => {
          analytics.onEvent('Click logo');
        }}
      >
        Fruit Store
      </NavItem>
      <NavItem
        href="/products?color=red"
        onClick={() => {
          analytics.onEvent('Click products', {color: 'red'});
        }}
      >
        Red
      </NavItem>
      <NavItem
        href="/products?color=yellow"
        onClick={() => {
          analytics.onEvent('Click products', {color: 'yellow'});
        }}
      >
        Yellow
      </NavItem>
      <NavItem
        href="/login"
        onClick={() => {
          analytics.onClick('Click login', {color: 'yellow'});
        }}
      >
        Login
      </NavItem>
      <NavItem
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Contact us
      </NavItem>
      {isOpen && <ContactModal setIsOpen={setIsOpen} />}
    </header>
  );
};

const NavItem = ({
  href,
  children,
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}) => {
  const handleClick = (e: React.MouseEvent) => {
    href && navigate.push(href);
    onClick?.(e); // NOTE: prettier에서 에러로 인식하네?
  };
  return <button onClick={handleClick}>{children}</button>;
};

const ContactModal = ({setIsOpen}: {setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const modalName = 'modal/contact';
  useAnalyticsModalView(modalName, {phoneNumber: true});
  return (
    <>
      <button onClick={() => setIsOpen(false)}>x</button>
      <div>010-0000-0000</div>
    </>
  );
};

export default NavBar;
