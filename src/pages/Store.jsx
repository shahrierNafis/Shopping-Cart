import { useEffect, useReducer, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Products from "../components/Products";
import css from "./Store.module.css";
/**
 * Represents a Store component.
 * @component
 */
function Store() {
  // Define a ref to store the categories
  const categories = useRef([]);
  const { category } = useParams();
  const navigate = useNavigate();

  // Define a state to store the current category
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
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
        // If no category is selected redirect to first category
        console.log(categories.current);
        if (!category) navigate(`/store/${data[0]}`);
        else {
          // Else rerender
          forceUpdate();
        }
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      {/* Render the Sidebar component */}
      <Sidebar categories={categories.current} current={category} />

      {/* Render the Products component */}
      <Products category={category} />
    </>
  );
}

export default Store;
