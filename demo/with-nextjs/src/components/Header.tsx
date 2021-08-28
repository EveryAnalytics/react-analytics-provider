import {FC} from 'react';
import {NavBar} from '.';

export const Header: FC = () => {
  return (
    <header>
      <NavBar href="/" onClick={() => console.log('fruite store')}>
        Fruite store
      </NavBar>
      <NavBar href="/products?color=red" onClick={() => console.log('products', {color: 'red'})}>
        Red
      </NavBar>
      <NavBar href="/products?color=yellow" onClick={() => console.log('products', {color: 'yellow'})}>
        Yellow
      </NavBar>
      <NavBar href="/login" onClick={() => console.log('login')}>
        Login
      </NavBar>
    </header>
  );
};
