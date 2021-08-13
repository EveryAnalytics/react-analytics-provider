import React from "react";
import NavBar from "./components/NavBar";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import Route from "./router/Route";

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
    </div>
  );
}

export default App;
