import { logEvent } from "@every-analytics/react-analytics-provider";
import React from "react";
import navigate from "../router/navigate";

const NavBar = () => {
  return (
    <header className="App-header">
      <NavItem
        href="/"
        onClick={() => {
          logEvent("Click logo");
        }}
      >
        Fruit Store
      </NavItem>
      <NavItem
        href="/products?color=red"
        onClick={() => {
          logEvent("Click nav item", { color: "red" });
        }}
      >
        Red
      </NavItem>
      <NavItem
        href="/products?color=yellow"
        onClick={() => {
          logEvent("Click logo", { color: "yellow" });
        }}
      >
        Yellow
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
