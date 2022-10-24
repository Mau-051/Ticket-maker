import React, { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { getProducts } from "../Service-code/productData";
import { Ticket } from "./Ticket";
import { v4 as uuidv4 } from "uuid";
import { MainSkeleton } from "./SkeletonComps/MainSkeleton";
import "./Styles/Main.css";

function calculateTotal(productArr) {
  return Math.round(
    productArr.reduce((sum, current) => {
      return sum + current[1].productTotal;
    }, 0)
  );
}

export function Main({
  globalTicket,
  globalTicketsTotal,
  addGlobalTicket,
  setGlobalTicketsTotal,
}) {
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

    Array.from(globalTicket).forEach((ticket) => {
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

  setGlobalTicketsTotal(calculateTotal(Array.from(globalTicket)));

  if (status === "loading") {
    return <MainSkeleton />;
  }

  return (
    <main>
      <Ticket
        ticketsArr={Array.from(globalTicket)}
        total={globalTicketsTotal}
      />
      <div className="product-zone">
        <div className="product-cards">
          {products.metals.map((product) => {
            return (
              <ProductCard
                name={product.name}
                imageURL={product.imageURL}
                price={product.price}
                passProduct={passProduct}
                key={uuidv4()}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
