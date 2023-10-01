import propTypes from "prop-types";

function Sidebar({ categories, current, setCurrent }) {
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
            className={`category ${current === category ? "active" : ""}`}
            key={category}
            href={`#${category}`}
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
