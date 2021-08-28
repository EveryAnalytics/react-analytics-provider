import NavBar from './components/NavBar';
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './pages/LoginPage';
import CurrencyPage from './pages/CurrencyPage';
import UserPropertyPage from './pages/UserPropertyPage';
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
      <Route path="/set-user-property">
        <UserPropertyPage />
      </Route>
    </div>
  );
}

export default App;
