import NavBar from './components/NavBar';
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './pages/LoginPage';
import CurrencyPage from './pages/CurrencyPage';
import Route from './router/Route';

function App() {
  return (
    <div className="App">
      <NavBar />
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
    </div>
  );
}

export default App;
