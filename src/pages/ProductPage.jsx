import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./ProductPage.module.css";
import Rating from "../components/Rating";
function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(undefined);
  useEffect(() => {
    console.log("0");
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
          <div className={css.price}>${product.price}</div>
          <div className={css.description}>{product.description}</div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
