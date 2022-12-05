import styled from '@emotion/styled';
import {useAnalyticsContext} from '@every-analytics/react-analytics-provider';
import React from 'react';
import {useSearchParams} from 'react-router-dom';
import NavItem, {NavItemProps} from './NavItem';

export default function ProductNav({children}: {children: React.ReactNode}) {
  return (
    <Wrapper>
      <Nav>
        <Ul>
          <ProductColorNavItem color="all">All</ProductColorNavItem>
          <ProductColorNavItem color="red">Red</ProductColorNavItem>
          <ProductColorNavItem color="yellow">Yellow</ProductColorNavItem>
          <ProductColorNavItem color="green">Green</ProductColorNavItem>
        </Ul>
      </Nav>
      <Content>{children}</Content>
    </Wrapper>
  );
}

const ProductColorNavItem = ({
  color,
  children,
  ...props
}: Omit<NavItemProps, 'isActive' | 'href'> & {color: string}) => {
  const analytics = useAnalyticsContext();
  const [params] = useSearchParams();

  const handleClick = () => {
    analytics.event('products', {color});
  };

  // 우선 여기서 판단하고, 자주 이런 판단로직이 필요할 경우 NavItem 안으로 넣는다.
  const isEqualPath = window.location.pathname === '/products';
  const isIncludeColor = params.getAll('color').includes(color);

  return (
    <NavItem
      {...props}
      href={`/products?color=${color}`}
      isActive={isEqualPath && isIncludeColor}
      onClick={handleClick}
    >
      {children}
    </NavItem>
  );
};

const HEADER_HEIGHT = '6rem';

const Wrapper = styled.div`
  display: flex;
  min-height: calc(100vh - ${HEADER_HEIGHT});
`;

const Ul = styled.ul`
  padding: 8px 0;
  margin: 0;
  list-style: none;
`;

export const Li = styled.li``;

const Content = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  width: 300px;
  border-right: 1px solid #ebebeb;
`;
