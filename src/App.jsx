// import { useState } from "react";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
function App() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link className="to-home" to="/">
          Home
        </Link>
        <Link className="to-store" to="/store">
          Store
        </Link>
        <Link className="to-cart" to="/cart">
          Cart
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store">
          <Route path="" element={<Store />} />
          <Route path=":category" element={<Store />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
