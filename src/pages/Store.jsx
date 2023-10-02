import { useEffect, useState, useRef } from "react";
import Sidebar from "../components/Sidebar";
import Products from "../components/Products";
import css from "./Shop.module.css";
/**
 * Represents a Store component.
 * @component
 */
function Store() {
  // Define a ref to store the categories
  const categories = useRef([]);
  // Define a state to store the current category
  const [current, setCurrent] = useState("");

  useEffect(() => {
    // change layout
    document.querySelector(".root").className = `root ${css.root}`;
    // Fetch the categories from the API
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => {
        // Throw an error if there is a network error
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => {
        // Store the category list in the ref
        categories.current = data;
        // Set the first category as the current category
        setCurrent(data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* Render the Sidebar component */}
      <Sidebar
        categories={categories.current}
        current={current}
        setCurrent={setCurrent}
      />
      {/* Render the Products component */}
      <Products category={current} />
    </>
  );
}

export default Store;
