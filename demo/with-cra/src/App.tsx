import {CartPage, LoginPage, MainPage, ProductsPage, MyPage} from './pages';
import Header from './components/Header';
import Main from './components/Main';
import MainProvider from './contexts/MainContext';
import Route from './router/Route';
import PurchasePage from './pages/PurchasePage';

function App() {
  return (
    <MainProvider>
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
        <Route path="/mypage">
          <MyPage />
        </Route>
      </Main>
    </MainProvider>
  );
}

export default App;
