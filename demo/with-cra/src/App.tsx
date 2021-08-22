import NavBar from './components/NavBar';
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './pages/LoginPage';
import Route from './router/Route';
import TimingPage from './pages/TimingPage';

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
      <Route path="/timing">
        <TimingPage />
      </Route>
    </div>
  );
}

export default App;
