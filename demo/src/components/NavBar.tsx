// import { logEvent } from "@every-analytics/react-analytics-provider";
import React from "react";
import navigate from "../router/navigate";
import {useAnalyticsContext} from '@every-analytics/react-analytics-provider';

const NavBar = () => {
  const analytics = useAnalyticsContext();

  return (
    <header className="App-header">
      <NavItem
        href="/"
        onClick={() => {
          analytics.onEvent('Click logo')
        }}
      >
        Fruit Store
      </NavItem>
      <NavItem
        href="/products?color=red"
        onClick={() => {
          analytics.onEvent("Click products", { color: "red" })
        }}
      >
        Red
      </NavItem>
      <NavItem
        href="/products?color=yellow"
        onClick={() => {
          analytics.onEvent("Click products", { color: "yellow" })
        }}
      >
        Yellow
      </NavItem>
      <NavItem
        href="/login"
        onClick={() => {
          analytics.onClick("Click login", { color: "yellow" })
        }}
      >
        Login
      </NavItem>
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
