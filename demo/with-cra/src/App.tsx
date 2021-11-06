import CartPage from './pages/CartPage';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import Main from './components/Main';
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import Route from './router/Route';
import PurchasePage from './pages/PurchasePage';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Route path="/">
          <MainPage />
        </Route>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/purchase">
          <PurchasePage />
        </Route>
      </Main>
    </>
  );
}

export default App;
