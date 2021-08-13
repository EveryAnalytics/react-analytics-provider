const NavBar = () => {
  return (
    <header className="App-header">
      <a href="/">Fruit Store</a>
      <a href="/products?color=red">Red</a>
      <a href="/products?color=yellow">Yellow</a>
    </header>
  );
};

export default NavBar;
