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

export function Main() {
  const [status, setStatus] = useState("loading");
  const [products, setProducts] = useState();
  const [tickets, setTickets] = useState(new Map());

  useEffect(() => {
    getProducts().then((response) => {
      setStatus("ok");
      setProducts(response);
    });
  }, []);

  function passProduct(productName, productPrice) {
    let productNum = 1;

    Array.from(tickets).forEach((ticket) => {
      if (ticket[1].productName === productName) {
        productNum = ticket[1].productNum + 1;
      }
    });

    setTickets(
      new Map(
        tickets.set(`${productName}${productPrice}`, {
          productNum,
          productTotal: productNum * productPrice,
          productName,
          productPrice,
        })
      )
    );
  }

  let total = calculateTotal(Array.from(tickets));

  if (status === "loading") {
    return <MainSkeleton />;
  }

  return (
    <main className="main">
      <Ticket ticketsArr={Array.from(tickets)} total={Math.round(total)} />
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
