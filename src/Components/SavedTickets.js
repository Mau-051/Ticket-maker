import React from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaHome } from "react-icons/fa";
import "./Styles/SavedTickets.css";
import useStore from "../store.js";

function selectSavedTickets(state) {
  return state.savedTickets;
}

export function SavedTickets() {
  const savedTickets = useStore(selectSavedTickets);
  const removeSavedTicket = useStore((state) => state.removeSavedTicket);

  return (
    <>
      <Link className="saved-home-btn" to="/">
        <FaHome />
      </Link>
      <h1>SAVED TICKETS</h1>
      <div className="saved-container">
        {savedTickets.length ? (
          ""
        ) : (
          <p className="no-tickets">No saved tickets</p>
        )}
        {savedTickets.map((ticket, ticketInd) => {
          return (
            <div key={ticket.id} className="saved-ticket">
              <button
                className="delete-saved-ticket-btn"
                onClick={() => removeSavedTicket(ticketInd)}
              >
                <FaTrash />
              </button>
              <p className="products">Products</p>
              <p>-----------------------</p>

              {ticket.ticketsArr.map((products) => {
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
                  <p key={products[1].id}>
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
              <p className="total">Total--------------${ticket.total}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
