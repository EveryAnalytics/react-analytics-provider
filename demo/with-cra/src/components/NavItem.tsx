import styled from '@emotion/styled';
import React from 'react';
import {NavLink} from 'react-router-dom';
import {Li} from './ProductNav';

export interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  isActive: boolean;
}
const NavItem = ({href, children, onClick, isActive}: NavItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    onClick?.(e);
    // navigate.push(href);
  };

  return (
    <Li>
      <NavItemButton
        to={href}
        onClick={handleClick}
        style={props => {
          return isActive
            ? {
                color: '#0095f6',
                backgroundColor: '#f7f7f7',
              }
            : {};
        }}
      >
        {children}
      </NavItemButton>
    </Li>
  );
};

export default NavItem;

const NavItemButton = styled(NavLink)`
  text-align: left;
  width: 100%;
  height: 50px;
  padding: 0 24px;
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  align-items: center;

  &:hover,
  &:focus {
    background-color: #fbfbfb;
  }
`;
