import React from 'react';
import {useAnalyticsContext} from '@every-analytics/react-analytics-provider';
import navigate from '../router/navigate';
import styled from '@emotion/styled';
import {css} from '@emotion/react';

export default function ProductNav({children}: {children: React.ReactNode}) {
  const analytics = useAnalyticsContext();

  return (
    <Wrapper>
      <Nav>
        <Ul>
          <NavItem
            href="/products?color=red"
            onClick={() => {
              analytics.onClick('products', {color: 'red'});
            }}
          >
            Red
          </NavItem>
          <NavItem
            href="/products?color=yellow"
            onClick={() => {
              analytics.onClick('products', {color: 'yellow'});
            }}
          >
            Yellow
          </NavItem>
          <NavItem
            href="/products?color=green"
            onClick={() => {
              analytics.onClick('products', {color: 'green'});
            }}
          >
            Green
          </NavItem>
        </Ul>
      </Nav>
      <Content>{children}</Content>
    </Wrapper>
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
    onClick?.(e);
    navigate.push(href);
  };

  const active = href === window.location.pathname + window.location.search;

  return (
    <Li>
      <NavItemButton onClick={handleClick} active={active}>
        {children}
      </NavItemButton>
    </Li>
  );
};

const HEADER_HEIGHT = '6rem';

const Wrapper = styled.div`
  display: flex;
  min-height: calc(100vh - ${HEADER_HEIGHT});
`;

const Nav = styled.nav`
  width: 300px;
  border-right: 1px solid #ebebeb;
`;

const Ul = styled.ul`
  padding: 8px 0;
  margin: 0;
  list-style: none;
`;

const Li = styled.li``;

const NavItemButton = styled.button<{active: boolean}>`
  text-align: left;
  width: 100%;
  height: 50px;
  padding: 0 24px;
  font-size: 1.6rem;
  font-weight: 600;

  &:hover,
  &:focus {
    background-color: #fbfbfb;
  }

  ${props =>
    props.active &&
    css`
      color: #0095f6;
      background-color: #f7f7f7 !important;
    `}
`;

const Content = styled.div`
  flex: 1;
`;
