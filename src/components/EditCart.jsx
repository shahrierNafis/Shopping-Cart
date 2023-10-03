import propTypes from "prop-types";
import { useContext, useState } from "react";
import css from "./EditCart.module.css";
import { appContext } from "../App";
/**
 * Edit the quantity of an item in the cart.
 *
 * @param {Object} props - The props containing the item id and quantity.
 * @param {string} props.id - The id of the item.
 * @param {number} props.quantity - The quantity of the item.
 * @returns {JSX.Element} - The JSX element containing the edit cart functionality.
 */
function EditCart({ id, quantity }) {
  const editCart = useContext(appContext);
  const [q, setQ] = useState(quantity);

  /**
   * Update the input quantity.
   *
   * @param {number} quantity - The new quantity value.
   */
  function handleInput(quantity) {
    if (quantity > -1 && quantity < 10000) {
      setQ(quantity);
    }
  }

  /**
   * Handle the click event for saving the cart.
   */
  function handleClick() {
    editCart(id, Number(q));
  }

  return (
    <>
      {/* Decrease button */}
      <button
        className={css.quantity}
        onClick={() => {
          handleInput(q - 1);
        }}
      >
        -
      </button>

      {/* Quantity input */}
      <input
        type="number"
        className={css.quantity}
        value={q}
        onChange={(e) => handleInput(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter" || e.keyCode === 13) {
            handleClick();
          }
        }}
      />

      {/* Increase button */}
      <button
        className={css.quantity}
        onClick={() => {
          handleInput(q + 1);
        }}
      >
        +
      </button>

      {/* Save button */}
      <button className={css.save} onClick={handleClick}>
        save
      </button>
    </>
  );
}
EditCart.propTypes = {
  id: propTypes.number,
  quantity: propTypes.number,
};
export default EditCart;
