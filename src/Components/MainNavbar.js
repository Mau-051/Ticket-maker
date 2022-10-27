import React from "react";
import { v4 as uuidv4 } from "uuid";
import useStore from "../store.js";

export function MainNavbar({ productsKeysArr }) {
  const setCurrentProduct = useStore((state) => state.setCurrentProduct);
  const currentProduct = useStore((state) => state.currentProduct);

  if (!currentProduct) {
    setCurrentProduct(productsKeysArr[0]);
  }

  return (
    <div>
      <ul className="main-navbar">
        {productsKeysArr.map((productKey) => {
          return (
            <li key={uuidv4()}>
              <button
                className={currentProduct === productKey ? "active" : ""}
                onClick={() => setCurrentProduct(productKey)}
              >
                {productKey.toUpperCase()}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
