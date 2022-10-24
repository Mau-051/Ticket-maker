import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./Styles/SavedTickets.css";

export function SavedTickets({ savedTickets }) {
  let navigate = useNavigate();

  async function handleSubmit(path) {
    navigate(path);
  }

  return (
    <>
      <button className="saved-home-btn" onClick={() => handleSubmit("/")}>
        Home
      </button>
      <h1>SAVED TICKETS</h1>
      <div className="saved-container">
        {savedTickets.map((ticket) => {
          return (
            <div key={uuidv4()} className="saved-ticket">
              <p>Products</p>
              <p>-----------------------</p>

              {ticket[0].map((products) => {
                let numOfSpace =
                  18 -
                  products[1].productName.length -
                  `${products[1].productPrice}`.length;
                let spaceStr = "";
                for (let i = 0; i < numOfSpace; i++) {
                  spaceStr = spaceStr + "-";
                }
                spaceStr = spaceStr + "$";

                return (
                  <p key={uuidv4()}>
                    {products[1].productNum
                      ? `X${products[1].productNum} `
                      : ""}
                    {[
                      products[0].slice(0, products[1].productName.length),
                      spaceStr,
                      products[0].slice(products[1].productName.length),
                    ]}
                  </p>
                );
              })}

              <p>-----------------------</p>
              <p>Total--------------${ticket[1]}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
