import propTypes from "prop-types";
import { useEffect, useState } from "react";
import Product from "./Product";
/**
 * Fetches products based on the given category using the Fake Store API.
 * Displays the products once they are fetched.
 * Displays a loading message while fetching the products.
 *
 * @param {string} category - The category of products to fetch.
 * @returns {JSX.Element} - The component that displays the products.
 */
function Products({ category }) {
  // State to store the fetched products
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Create an abort controller to cancel previous fetch requests
    const abortController = new AbortController();

    // Set products to undefined to show the loading screen
    setProducts(undefined);

    // Fetch products from the Fake Store API
    fetch(`https://fakestoreapi.com/products/category/${category}`, {
      signal: abortController.signal,
    })
      .then((response) => {
        // Throw an error if there is a network error
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => {
        // Set the fetched products
        setProducts(data);
      })
      .catch((err) => {
        console.log(`error:${err}`);
      });

    return () => {
      // Cleanup function, aborts previous fetch requests
      abortController.abort();
    };
  }, [category]);

  // Show loading screen if products are still being fetched
  if (!products) {
    return <div>loading {category} products...</div>;
  }

  // Display the fetched products
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
