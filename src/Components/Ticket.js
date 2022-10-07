import React from "react";

export function Ticket({ ticketsArr, total }) {
  return (
    <div className="ticket-zone">
      <h2>Ticket</h2>
      <div className="ticket">
        <p>Products</p>
        <p>-----------------------</p>
        {ticketsArr.map((ticket, i) => {
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
            <p key={i}>
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
      {ticketsArr.length ? (
        <a href="/ticket" className="send-ticket">
          save ticket
        </a>
      ) : (
        ""
      )}
    </div>
  );
}
