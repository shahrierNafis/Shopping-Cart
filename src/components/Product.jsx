import propTypes from "prop-types";
import Rating from "./Rating";
function Product({ product }) {
  return (
    <div className="product">
      <img src={product.image} alt="" />
      <div className="title">{product.title}</div>
      <div className="price">s{product.price}</div>
      <Rating className="rating" rating={product.rating} />
      <div className="description">{product.description}</div>
    </div>
  );
}
Product.propTypes = {
  product: propTypes.object.isRequired,
};
export default Product;