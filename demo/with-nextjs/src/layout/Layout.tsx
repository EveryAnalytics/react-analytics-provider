import React from 'react';
import {Header} from '../components';

export const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
