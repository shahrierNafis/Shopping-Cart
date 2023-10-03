import { useState } from "react";
import propTypes from "prop-types";

import css from "./AddToCart.module.css";
/**
 * Renders a component to add an item to the cart.
 *
 * @param {Object} props - The component properties.
 * @param {Function} props.addToCart - The function to add an item to the cart.
 * @param {string} props.id - The ID of the item.
 * @returns {JSX.Element} The rendered component.
 */
function AddToCart({ addToCart, id }) {
  const [quantity, setQuantity] = useState(1);

  /**
   * Updates the quantity based on the provided value.
   *
   * @param {number} q - The new quantity value.
   */
  function handleQuantity(q) {
    // Increase input width
    if (q > 0 && q < 10000) {
      setQuantity(Number(q));
    }
  }

  return (
    <>
      {/* decrease */}
      <button
        onClick={() => {
          if (quantity) {
            handleQuantity(quantity - 1);
          }
        }}
      >
        -
      </button>
      {/* quantity */}
      <input
        type="number"
        className={css.quantity}
        value={quantity}
        onChange={(e) => {
          handleQuantity(e.target.value);
        }}
      />
      {/* increase */}
      <button
        onClick={() => {
          handleQuantity(quantity + 1);
        }}
      >
        +
      </button>{" "}
      {/* add to cart */}
      <button
        className={css.addToCartBtn}
        onClick={() => {
          addToCart(id, quantity);
        }}
      >
        Add to Cart
      </button>
    </>
  );
}
AddToCart.propTypes = {
  addToCart: propTypes.func.isRequired,
  id: propTypes.number.isRequired,
};
export default AddToCart;
