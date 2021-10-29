import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './pages/LoginPage';
import CategoryPage from './pages/CategoryPage';
import Route from './router/Route';
import Main from './components/Main';
import Header from './components/Header';

function App() {
  return (
<<<<<<< HEAD
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
        <Route path="/category">
          <CategoryPage />
        </Route>
      </Main>
    </>
  );
}

export default App;
