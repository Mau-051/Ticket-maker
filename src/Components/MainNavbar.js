import React from "react";
import { v4 as uuidv4 } from "uuid";
import useStore from "../store.js";

export function MainNavbar({ productsKeysArr }) {
  const setCurrentProduct = useStore((state) => state.setCurrentProduct);

  return (
    <div>
      <ul className="main-navbar">
        {productsKeysArr.map((productKey = "hdhduhd") => {
          return (
            <li key={uuidv4()}>
              <button onClick={() => setCurrentProduct(productKey)}>
                {productKey.toUpperCase()}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
