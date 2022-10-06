import { useEffect, useState } from "react";
import { Main } from "./Components/Main";
import { getProducts } from "./Service-code/productData";
import { Routes, Route } from "react-router-dom";
import ShowTicket from "./Components/ShowTicket";

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
    <Routes>
      <Route path="/" element={<Main productsArr={products.metals} />} />
      <Route path="/ticket" element={<ShowTicket />} />
    </Routes>
  );
}
