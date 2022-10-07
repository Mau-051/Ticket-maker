import React from "react";
import { ProductCardSkeleton } from "./ProductCardSkeleton";
import { TicketSkeleton } from "./TicketSkeleton";

export function MainSkeleton() {
  return (
    <main className="main">
      <TicketSkeleton />
      <div className="product-zone">
        {[...Array(8)].map((_, ind) => {
          return <ProductCardSkeleton key={`productSkeleton${ind}`} />;
        })}
      </div>
    </main>
  );
}
