import React from 'react';
import {useAnalyticsContext} from '@every-analytics/react-analytics-provider';
import navigate from '../router/navigate';
import styled from '@emotion/styled';

export default function NavBar() {
  const analytics = useAnalyticsContext();

  return (
    <Nav>
      <Ul>
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
          href="/set-currency"
          onClick={() => {
            analytics.onSet({currency: 'KRW'});
          }}
        >
          Currency
        </NavItem>
        <NavItem href="/set-user-property">UserProperty</NavItem>
      </Ul>
    </Nav>
  );
}

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
  return (
    <Li>
      <NavItemButton onClick={handleClick}>{children}</NavItemButton>
    </Li>
  );
};

const Nav = styled.nav`
  display: inline-block;
  width: 300px;
  height: 100%;
  padding-top: 4rem;
  border-right: 1px solid #ebebeb;
`;

const Ul = styled.ul`
  padding: 8px 0;
  margin: 0;
  list-style: none;
`;

const Li = styled.li``;

const NavItemButton = styled.button`
  text-align: left;
  width: 100%;
  height: 50px;
  padding: 0 24px;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
  &:focus {
    color: #0095f6;
    background-color: #f7f7f7;
  }
`;
