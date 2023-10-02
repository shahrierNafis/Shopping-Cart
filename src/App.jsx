import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import { createContext, useEffect, useState } from "react";

export const appContext = createContext();
/**
 * The main component of the application.
 * Manages the cart state and handles adding items to the cart.
 */
function App() {
  // Check if the cart is empty in localStorage and add an empty object if it is
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify({}));
  }

  // Get the cart from localStorage and initialize the state
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));

  // Update the cart in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /**
   * Adds an item to the cart with the specified ID and quantity.
   * If the item is already in the cart, the quantity is updated.
   * If the item is not in the cart, it is added with the specified quantity.
   *
   * @param {string} id - The ID of the item to add to the cart.
   * @param {number} quantity - The quantity of the item to add to the cart.
   */
  function addToCart(id, quantity) {
    if (!cart[id]) {
      // If the item is not already in the cart, add it with the specified quantity
      setCart({ ...cart, [id]: quantity });
    } else {
      // If the item is already in the cart, update the quantity
      setCart({ ...cart, [id]: cart[id] + quantity });
    }
  }
  /**
   * Updates the quantity of an item in the cart.
   * @param {string} id - The ID of the item to update.
   * @param {number} quantity - The new quantity of the item.
   */
  function editCart(id, quantity) {
    // Update the quantity of the item in the cart
    setCart({ ...cart, [id]: quantity });
  }
  /**
   * Resets the cart by setting the cart object to contain only one item with a quantity of 0.
   */
  function resetCart() {
    setCart({ 1: 0 });
  }
  /**
   * Calculate the total quantity of items in the cart.
   *
   * @returns {number} The total quantity of items in the cart.
   */
  function getQuantity() {
    let quantity = 0;
    Object.keys(cart).forEach((product) => {
      quantity += cart[product];
    });

    return quantity;
  }

  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav className="nav">
        <Link className="to-home" to="/">
          Home
        </Link>
        <Link className="to-store" to="/store">
          Store
        </Link>
        <Link className="to-cart" to="/cart">
          {/* Show the quantity of products in the cart if it is more than 0 */}
          Cart {getQuantity() === 0 ? "" : getQuantity()}
        </Link>
      </nav>

      {/* Routes */}
      <appContext.Provider value={editCart}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store">
            <Route path="" element={<Store />} />
            <Route path=":category" element={<Store />} />
          </Route>
          <Route
            path="/cart"
            element={<Cart cart={cart} resetCart={resetCart} />}
          />

          <Route
            path="/product/:id"
            element={<ProductPage addToCart={addToCart} />}
          />
        </Routes>
      </appContext.Provider>
    </BrowserRouter>
  );
}

export default App;
