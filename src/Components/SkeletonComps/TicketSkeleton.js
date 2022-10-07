import React from "react";

export function TicketSkeleton() {
  return (
    <div className="ticket-zone">
      <h2>Ticket</h2>
      <div className="ticket">
        <p>Products</p>
        <p>-----------------------</p>
        <p>Total--------------$0</p>
      </div>
    </div>
  );
}
