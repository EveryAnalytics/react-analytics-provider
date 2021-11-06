import {css} from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import {navigate} from '../router';
import {Li} from './ProductNav';

export interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  isActive: boolean;
}
export const NavItem = ({href, children, onClick, isActive}: NavItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    onClick?.(e);
    // navigate.push(href);
  };

  return (
    <Li>
      <NavItemButton onClick={handleClick} active={isActive}>
        {children}
      </NavItemButton>
    </Li>
  );
};

export const NavItemButton = styled.button<{active: boolean}>`
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
