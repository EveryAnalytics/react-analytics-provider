import React from 'react';
import styled from '@emotion/styled';

export default function Header() {
  return (
    <PageHeader>
      <Title>Fruit Store</Title>
      <HeaderMenu>Cart</HeaderMenu>
      <HeaderMenu>Login</HeaderMenu>
    </PageHeader>
  );
}

const PageHeader = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 6rem;
  background-color: #ffffff;
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.08);
`;

const Title = styled.h1`
  margin: 0;
  margin-left: 24px;
  flex: 1;
  font-size: 3.2rem;
  font-weight: bold;
`;

const HeaderMenu = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 16px;
  padding: 8px;
  font-size: 1.6rem;
  font-weight: 600;
  &:hover {
    color: #0095f6;
  }
  &:last-child {
    margin-right: 24px;
  }
`;
