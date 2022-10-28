import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { FaTrash, FaSave } from "react-icons/fa";
import useStore from "../store.js";

export function Ticket({ ticketsArr, total }) {
  let navigate = useNavigate();

  const savedTickets = useStore((state) => state.savedTickets);
  const addSavedTicket = useStore((state) => state.addSavedTicket);
  const clearGlobalTicket = useStore((state) => state.clearGlobalTicket);

  let boolsavedTickets = false;
  if (savedTickets.length) {
    boolsavedTickets = true;
  }

  async function handleSubmit(path) {
    navigate(path);
    if (path === "ticket") {
      addSavedTicket([ticketsArr, total, uuidv4()]);
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
            <p key={uuidv4()}>
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
          <Link
            to="saved-tickets"
            className={
              ticketsArr.length
                ? "ticket-button saved-tickets"
                : "ticket-button saved-tickets big-ticket-btn"
            }
          >
            Saved {ticketsArr.length ? <br></br> : ""}
            tickets
          </Link>
        ) : (
          ""
        )}

        {ticketsArr.length ? (
          <Link
            to="ticket"
            onClick={() => addSavedTicket([ticketsArr, total, uuidv4()])}
            className={
              boolsavedTickets
                ? "ticket-button save-ticket"
                : "ticket-button save-ticket big-ticket-btn"
            }
          >
            <FaSave />
          </Link>
        ) : (
          ""
        )}
      </div>
      {ticketsArr.length ? (
        <button
          className="delete-ticket-btn"
          onClick={() => clearGlobalTicket()}
        >
          <FaTrash />
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
