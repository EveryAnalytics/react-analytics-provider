<<<<<<< HEAD:demo/with-cra/src/App.tsx
import NavBar from "./components/NavBar";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import LoginPage from "./pages/LoginPage";
import Route from "./router/Route";
import React from "react";
=======
import NavBar from './components/NavBar';
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './pages/LoginPage';
import Route from './router/Route';
>>>>>>> main:demo/src/App.tsx

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
    </div>
  );
}

export default App;
