import propTypes from "prop-types";
import css from "./Sidebar.module.css";
import { useNavigate } from "react-router-dom";

/**
 * Renders the sidebar component.
 *
 * @param {Array} categories - The list of categories.
 * @param {string} current - The currently selected category.
 * @param {function} setCurrent - Callback function to set the current category.
 * @returns {JSX.Element} The JSX element representing the sidebar.
 */
function Sidebar({ categories, current }) {
  const navigate = useNavigate();

  // Show loading screen if categories are not yet fetched
  if (categories.length === 0) {
    return (
      <>
        <nav className={css.categories}>loading</nav>
      </>
    );
  }

  return (
    <>
      <nav className={css.categories}>
        <div className="title">Categories:</div>

        {categories.map((category) => (
          <div
            // Add class "current" if the category is selected
            className={`${css.category} ${
              current === category ? `${css.active}` : ""
            }`}
            key={category}
            href={`#${category}`}
            // Change current on click
            onClick={() => navigate(`/store/${category}`)}
          >
            {category}
          </div>
        ))}
      </nav>
    </>
  );
}
Sidebar.propTypes = {
  categories: propTypes.array,
  current: propTypes.string,
};
export default Sidebar;
