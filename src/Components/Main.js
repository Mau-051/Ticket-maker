import React, { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { getProducts } from "../Service-code/productData";
import "./Styles/Main.css";
import { Ticket } from "./Ticket";

function calculateTotal(productArr) {
  console.log(productArr);
  return productArr.reduce((sum, current) => {
    return sum + current[1].productTotal;
  }, 0);
}

export function Main() {
  const [status, setStatus] = useState("loading");
  const [products, setProducts] = useState();
  const [tickets, setTickets] = useState(new Map());
  //todo: use a map instead of an array

  useEffect(() => {
    getProducts().then((response) => {
      setStatus("ok");
      setProducts(response);
    });
  }, []);

  function passProduct(productName, productPrice) {
    let productNum = 1;

    Array.from(tickets).forEach((ticket) => {
      if (
        ticket[0].split("").slice(0, productName.length).join("") == productName
      ) {
        productNum = ticket[1].productNum + 1;
      }
    });

    let numOfSpace = 18 - productName.length - `${productPrice}`.length;
    let spaceStr = "";
    for (let i = 0; i < numOfSpace; i++) {
      spaceStr = spaceStr + "-";
    }
    spaceStr = spaceStr + "$";

    setTickets(
      new Map(
        tickets.set(`${productName}${spaceStr}${productPrice}`, {
          productNum,
          productTotal: productNum * productPrice,
          productPrice,
        })
      )
    );
    console.log(tickets);
  }

  let total = calculateTotal(Array.from(tickets));

  if (status === "loading") {
    return <p>loading</p>;
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
