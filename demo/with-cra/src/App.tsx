import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './pages/LoginPage';
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
      </Main>
    </>
  );
}

export default App;
