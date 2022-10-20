import React from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store.js";

export function Ticket({ ticketsArr, total }) {
  let navigate = useNavigate();

  const savedTickets = useStore((state) => state.savedTickets);
  const addSavedTicket = useStore((state) => state.addSavedTicket);

  let boolsavedTickets = false;
  if (savedTickets.length) {
    boolsavedTickets = true;
  }

  async function handleSubmit(path) {
    navigate(path);
    if (path === "ticket") {
      addSavedTicket([ticketsArr, total]);
    }
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
        {boolsavedTickets ? (
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
              boolsavedTickets ? "save-ticket" : "save-ticket big-ticket-btn"
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
