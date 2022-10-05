import { useEffect, useState } from "react";
import { Main } from "./Components/Main";
import { getProducts } from "./Service-code/productData";

export function App() {
  const [status, setStatus] = useState("loading");
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts().then((response) => {
      setStatus("ok");
      setProducts(response);
    });
  }, []);

  if (status === "loading") {
    return <p>loading</p>;
  }

  return (
    <>
      <Main productsArr={products.metals} />
    </>
  );
}
