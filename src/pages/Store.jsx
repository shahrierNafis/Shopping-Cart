import { useEffect, useState, useRef } from "react";
import Sidebar from "../components/Sidebar";
import Products from "../components/Products";
function Store() {
  const categories = useRef([]);
  const [current, setCurrent] = useState("");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        categories.current = data;
        setCurrent(data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Sidebar
        categories={categories.current}
        current={current}
        setCurrent={setCurrent}
      />
      <Products category={current} />
    </>
  );
}

export default Store;
