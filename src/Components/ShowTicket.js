import React from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/showTicket.css";

export function ShowTicket({ globalTickets, globalTicketsTotal }) {
  let navigate = useNavigate();

  async function handleSubmit(path) {
    navigate(path);
  }

  return (
    <div className="show-container">
      <div className="show-btn-container">
        <button className="show-home-btn" onClick={() => handleSubmit("/")}>
          home
        </button>
        <button
          className="show-saved-btn"
          onClick={() => handleSubmit("/saved-tickets")}
        >
          saved tickets
        </button>
      </div>
      <main className="show-ticket">
        <p>Products</p>
        <p>-----------------------</p>
        {Array.from(globalTickets).map((ticket) => {
          let numOfSpace =
            18 -
            ticket[1].productName.length -
            `${ticket[1].productPrice}`.length;
          let spaceStr = "";
          for (let i = 0; i < numOfSpace; i++) {
            spaceStr = spaceStr + "-";
          }
          spaceStr = spaceStr + "$";

          return (
            <p key={ticket[1].productName}>
              {ticket[1].productNum ? `X${ticket[1].productNum} ` : ""}
              {[
                ticket[0].slice(0, ticket[1].productName.length),
                spaceStr,
                ticket[0].slice(ticket[1].productName.length),
              ]}
            </p>
          );
        })}
        <p>-----------------------</p>
        <p>Total--------------${globalTicketsTotal}</p>
      </main>
    </div>
  );
}
