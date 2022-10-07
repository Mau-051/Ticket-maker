import React from "react";

export function Ticket({ ticketsArr, total }) {
  console.log(ticketsArr, total);
  return (
    <div className="ticket-zone">
      <h2>Ticket</h2>
      <div className="ticket">
        <p>Products</p>
        <p>-----------------------</p>
        {ticketsArr.map((ticket, i) => {
          return (
            <p key={i}>
              {ticket[1].productNum ? `X${ticket[1].productNum} ` : ""}
              {ticket[0]}
            </p>
          );
        })}
        {ticketsArr.length ? <p>-----------------------</p> : ""}

        <p>Total--------------${total}</p>
      </div>
      {ticketsArr.length ? (
        <a href="/ticket" className="send-ticket">
          send ticket
        </a>
      ) : (
        ""
      )}
    </div>
  );
}
