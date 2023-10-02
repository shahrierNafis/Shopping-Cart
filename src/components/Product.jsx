import propTypes from "prop-types";
import Rating from "./Rating";
import { useNavigate } from "react-router-dom";
import css from "./Product.module.css";
function Product({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className={css.product}
      onClick={() => {
        navigate(`/product/${product.id}`);
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
