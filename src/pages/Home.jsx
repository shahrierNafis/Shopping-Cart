import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      This is a website built using React. It allows users to browse and add
      products to a cart. <Link to="/store">Store</Link>
    </div>
  );
}

export default Home;
