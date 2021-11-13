import {CartPage, LoginPage, MainPage, ProductsPage, MyPage} from './pages';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import MainProvider from './contexts/MainContext';
import PurchasePage from './pages/PurchasePage';

function App() {
  return (
    <MainProvider>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="/purchase" element={<PurchasePage />} />
        </Routes>
      </Main>
    </MainProvider>
  );
}

export default App;
