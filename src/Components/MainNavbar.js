import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import useStore from "../store.js";

export function MainNavbar({ productsKeysArr }) {
  const setcurrentProductType = useStore(
    (state) => state.setcurrentProductType
  );
  const currentProductType = useStore((state) => state.currentProductType);

  useEffect(() => {
    setcurrentProductType(productsKeysArr[0]);
  }, []);

  return (
    <div>
      <ul className="main-navbar">
        {productsKeysArr.map((productKey) => {
          return (
            <li key={uuidv4()}>
              <button
                className={currentProductType === productKey ? "active" : ""}
                onClick={() => setcurrentProductType(productKey)}
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
