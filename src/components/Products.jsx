import propTypes from "prop-types";
import { useEffect, useState } from "react";
import Product from "./Product";
function Products({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    setProducts(undefined);
    fetch(`https://fakestoreapi.com/products/category/${category}`, {
      signal: abortController.signal,
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
    return () => {
      abortController.abort();
    };
  }, [category]);
  if (!products) {
    return <div>loading {category} products...</div>;
  }
  return (
    <>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
Products.propTypes = {
  category: propTypes.string,
};
export default Products;
