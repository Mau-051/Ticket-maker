import React, { useState } from "react";
import { ProductCard } from "./ProductCard";
import "./Styles/Main.css";
import { Ticket } from "./Ticket";

function calculateTotal(productArr) {
  return productArr.reduce((sum, current) => {
    return sum + current[1].productTotal;
  }, 0);
}

export function Main({ productsArr }) {
  const [tickets, setTickets] = useState([]);

  function passProduct(productName, productPrice) {
    let productNum = 1;

    tickets.forEach((ticket, ind) => {
      if (
        ticket[0].split("").slice(0, productName.length).join("") == productName
      ) {
        productNum = ticket[1].productNum + 1;
        tickets.splice(ind, 1);
      }
    });

    let numOfSpace = 18 - productName.length - `${productPrice}`.length;
    let spaceStr = "";
    for (let i = 0; i < numOfSpace; i++) {
      spaceStr = spaceStr + "-";
    }
    spaceStr = spaceStr + "$";

    setTickets((prevTickets) => [
      ...prevTickets,
      [
        `${productName}${spaceStr}${productPrice}`,
        { productNum, productTotal: productNum * productPrice, productPrice },
      ],
    ]);
  }

  let total = calculateTotal(tickets);

  return (
    <main className="main">
      <Ticket ticketsArr={tickets} total={Math.round(total)} />
      <div className="product-zone">
        {productsArr.map((product) => {
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
