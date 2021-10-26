import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './pages/LoginPage';
import CurrencyPage from './pages/CurrencyPage';
import UserPropertyPage from './pages/UserPropertyPage';
import Route from './router/Route';
import Main from './components/Main';
import Header from './components/Header';

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
        <Route path="/set-currency">
          <CurrencyPage />
        </Route>
        <Route path="/set-user-property">
          <UserPropertyPage />
        </Route>
      </Main>
    </>
  );
}

export default App;
