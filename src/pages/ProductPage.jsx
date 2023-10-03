import { useEffect, useState } from "react";
import propTypes from "prop-types";
import { useParams } from "react-router-dom";
import css from "./ProductPage.module.css";
import Rating from "../components/Rating";
import AddToCart from "../components/AddToCart";
function ProductPage({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(undefined);
  useEffect(() => {
    // change layout
    document.querySelector(".root").className = `root ${css.root}`;
    return () => {};
  }, []);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));

    return () => {};
  }, [id]);
  // show loading screen
  if (!product) {
    return <div className={css.product}>loading product</div>;
  }
  return (
    <>
      <div className={css.product}>
        <img className={css.image} src={product.image} alt={product.title} />
        <div className={css.info}>
          <div className={css.title}>{product.title}</div>
          <Rating className={css.rating} rating={product.rating} />
          <br />
          <AddToCart addToCart={addToCart} id={product.id} />
          <div className={css.price}>${product.price}</div>
          <div className={css.description}>{product.description}</div>
        </div>
      </div>
    </>
  );
}
ProductPage.propTypes = {
  addToCart: propTypes.func.isRequired,
};
export default ProductPage;
