import React, { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { getProducts } from "../Service-code/productData";
import { Ticket } from "./Ticket";
import "./Styles/Main.css";
import { MainSkeleton } from "./SkeletonComps/MainSkeleton";

function calculateTotal(productArr) {
  return productArr.reduce((sum, current) => {
    return sum + current[1].productTotal;
  }, 0);
}

export function Main({ globalTickets, addGlobalTicket }) {
  const [status, setStatus] = useState("loading");
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts().then((response) => {
      setStatus("ok");
      setProducts(response);
    });
  }, []);

  function passProduct(productName, productPrice) {
    let productNum = 1;

    Array.from(globalTickets).forEach((ticket) => {
      if (ticket[1].productName === productName) {
        productNum = ticket[1].productNum + 1;
      }
    });

    addGlobalTicket(`${productName}${productPrice}`, {
      productNum,
      productTotal: productNum * productPrice,
      productName,
      productPrice,
    });
  }

  let total = calculateTotal(Array.from(globalTickets));

  if (status === "loading") {
    return <MainSkeleton />;
  }

  return (
    <main className="main">
      <Ticket
        ticketsArr={Array.from(globalTickets)}
        total={Math.round(total)}
      />
      <div className="product-zone">
        {products.metals.map((product) => {
          return (
            <ProductCard
              name={product.name}
              imageURL={product.imageURL}
              price={product.price}
              passProduct={passProduct}
              key={product.key}
            />
          );
        })}
      </div>
    </main>
  );
}
