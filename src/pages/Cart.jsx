import propTypes from "prop-types";
import css from "./Cart.module.css";
import { useEffect, useState } from "react";
import CartItems from "../components/CartItems";

/**
 * Renders the Cart component.
 *
 * @param {Object} props - The props object.
 * @param {Object} props.cart - The cart object.
 * @param {Function} props.resetCart - The function to reset the cart.
 * @returns {JSX.Element} The rendered Cart component.
 */
function Cart({ cart, resetCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    /**
     * Fetches the product details for each item in the cart.
     * Updates the products state with the fetched data.
     */
    const fetchProductDetails = async () => {
      const items = [];

      for (const id of Object.keys(cart)) {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const product = await response.json();

        // Add quantity
        product.quantity = cart[id];
        items.push(product);
      }

      setProducts(items);
    };

    fetchProductDetails();
  }, [cart]);

  useEffect(() => {
    // Changes the layout on render.
    document.querySelector(".root").className = `root ${css.root}`;
  }, []);

  return (
    <>
      <div className={css.content}>
        <CartItems products={products} cart={cart} />
        <div className={css.checkout}>
          <div className={css.total}>
            Total: $
            {products.reduce((total, product) => {
              return total + product.quantity * product.price;
            }, 0)}
          </div>
          <button className={css.checkoutBtn} onClick={resetCart}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
Cart.propTypes = {
  cart: propTypes.object,
  resetCart: propTypes.func.isRequired,
};
export default Cart;
