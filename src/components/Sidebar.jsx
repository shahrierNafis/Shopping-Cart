import propTypes from "prop-types";

/**
 * Renders the sidebar component.
 *
 * @param {Array} categories - The list of categories.
 * @param {string} current - The currently selected category.
 * @param {function} setCurrent - Callback function to set the current category.
 * @returns {JSX.Element} The JSX element representing the sidebar.
 */
function Sidebar({ categories, current, setCurrent }) {
  // Show loading screen if categories are not yet fetched
  if (categories.length === 0) {
    return (
      <>
        <nav className="categories">loading</nav>
      </>
    );
  }

  return (
    <>
      <nav className="categories">
        <div className="title">Categories:</div>

        {categories.map((category) => (
          <div
            // Add class "current" if the category is selected
            className={`category ${current === category ? "active" : ""}`}
            key={category}
            href={`#${category}`}
            // Change current on click
            onClick={() => setCurrent(category)}
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
  setCurrent: propTypes.func.isRequired,
};
export default Sidebar;
