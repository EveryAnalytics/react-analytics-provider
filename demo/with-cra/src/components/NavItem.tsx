import {css} from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {Li} from './ProductNav';

export interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  isActive: boolean;
}
export const NavItem = ({href, children, onClick, isActive}: NavItemProps) => {
  const navigate = useNavigate();
  const handleClick = (e: React.MouseEvent) => {
    onClick?.(e);
    navigate(href);
  };

  return (
    <Li>
      <NavItemButton to={href} onClick={handleClick} isActive={isActive}>
        {children}
      </NavItemButton>
    </Li>
  );
};

export default NavItem;

const NavItemButton = styled(NavLink)<{isActive: boolean}>`
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

  ${props =>
    props.isActive &&
    css`
      color: #0095f6;
      background-color: #f7f7f7 !important;
    `}
`;
