import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Rating from "./Rating";
import css from "./CartItems.module.css";
import EditCart from "./EditCart";
/**
 * Renders a list of cart items.
 *
 * @param {Array} products - The array of products in the cart.
 * @returns {JSX.Element} - The rendered cart items.
 */
function CartItem({ products }) {
  const navigate = useNavigate();

  return (
    <>
      <div className={css.products}>
        {products.map((product) => {
          // Don't render if quantity is zero
          if (product.quantity === 0) {
            return null;
          }

          return (
            <div key={product.id} className={css.product}>
              <img
                className={css.image}
                src={product.image}
                alt={product.title}
              />
              <div className={css.info}>
                <div
                  className={css.title}
                  onMouseUp={(e) => {
                    if (e.button === 0) {
                      navigate(`/product/${product.id}`);
                    } else if (e.button === 1) {
                      var win = window.open(`/product/${product.id}`, "_blank");
                      win.focus();
                    }
                  }}
                >
                  {product.title}
                </div>
                <Rating className={css.rating} rating={product.rating} />
                <br />
                <div className={css.price}>${product.price}</div>
                <EditCart id={product.id} quantity={product.quantity} />
                <br />
                <div className={css.description}>{product.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
CartItem.propTypes = {
  products: propTypes.array,
};
export default CartItem;
