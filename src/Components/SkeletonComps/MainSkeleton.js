import React from "react";
import { v4 as uuidv4 } from "uuid";
import { ProductCardSkeleton } from "./ProductCardSkeleton";
import { TicketSkeleton } from "./TicketSkeleton";

export function MainSkeleton() {
  return (
    <>
      <div className="main-navbar sk" />
      <main className="main">
        <TicketSkeleton />
        <div className="product-zone">
          <div className="product-cards">
            {[...Array(8)].map((_, ind) => {
              return <ProductCardSkeleton key={uuidv4()} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
}
