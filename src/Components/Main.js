import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ProductCard } from "./ProductCard";
import { getProducts } from "../Service-code/productData";
import { MainNavbar } from "./MainNavbar";
import { Ticket } from "./Ticket";
import { MainSkeleton } from "./SkeletonComps/MainSkeleton";
import useStore from "../store.js";
import "./Styles/Main.css";

function calculateTotal(productArr) {
  return Math.round(
    productArr.reduce((sum, current) => {
      return sum + current[1].productTotal;
    }, 0)
  );
}

export function Main({ globalTicket, globalTicketsTotal }) {
  const [status, setStatus] = useState("loading");
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts().then((response) => {
      setStatus("ok");
      setProducts(response);
    });
  }, []);

  const addGlobalTicket = useStore((state) => state.addGlobalTicket);
  const setGlobalTicketsTotal = useStore(
    (state) => state.setGlobalTicketsTotal
  );
  const currentProduct = useStore((state) => state.currentProduct);

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
    <>
      <MainNavbar productsKeysArr={Object.keys(products)} />
      <main>
        <Ticket
          ticketsArr={Array.from(globalTicket)}
          total={globalTicketsTotal}
        />
        <div className="product-zone">
          <div className="product-cards">
            {products[
              currentProduct ? currentProduct : Object.keys(products)[0]
            ].map((product) => {
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
    </>
  );
}
