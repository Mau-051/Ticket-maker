import React from "react";
import { useNavigate } from "react-router-dom";

export function Ticket({ ticketsArr, total }) {
  let navigate = useNavigate();
  let savedTickets = true;

  async function handleSubmit(path) {
    navigate(path);
  }

  return (
    <div className="ticket-zone">
      <h2>Ticket</h2>
      <div className="ticket">
        <p>Products</p>
        <p>-----------------------</p>
        {ticketsArr.map((ticket) => {
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
        {ticketsArr.length ? <p>-----------------------</p> : ""}

        <p>Total--------------${total}</p>
      </div>
      <div className="ticket-btn-container">
        {savedTickets ? (
          <button
            onClick={() => handleSubmit("saved-tickets")}
            className={
              ticketsArr.length
                ? "saved-tickets"
                : "saved-tickets big-ticket-btn"
            }
          >
            Saved {ticketsArr.length ? <br></br> : ""}
            tickets
          </button>
        ) : (
          ""
        )}

        {ticketsArr.length ? (
          <button
            onClick={() => handleSubmit("ticket")}
            className={
              savedTickets ? "save-ticket" : "save-ticket big-ticket-btn"
            }
          >
            Save ticket
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
