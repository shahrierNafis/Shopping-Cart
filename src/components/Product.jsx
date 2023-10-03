import propTypes from "prop-types";
import Rating from "./Rating";
import { useNavigate } from "react-router-dom";
import css from "./Product.module.css";
/**
 * Renders a product component.
 * @param {Object} props - The props object.
 * @param {Object} props.product - The product to render.
 */
function Product({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className={css.product}
      onMouseUp={(e) => {
        // Handle left click
        if (e.button === 0) {
          navigate(`/product/${product.id}`);
        }
        // Handle middle click
        else if (e.button === 1) {
          var win = window.open(`/product/${product.id}`, "_blank");
          win.focus();
        }
      }}
    >
      <img src={product.image} alt={product.title} />
      <div className={css.title}>{product.title}</div>
      <Rating className={css.rating} rating={product.rating} />
      <br />
      <div className={css.price}>${product.price}</div>

      <div className={css.description}>{product.description}</div>
    </div>
  );
}
Product.propTypes = {
  product: propTypes.object.isRequired,
};
export default Product;
