import React from "react";

export function ProductCard({ name, imageURL, price, passProduct }) {
  return (
    <button className="product-card" onClick={() => passProduct(name, price)}>
      <img
        className="product-img"
        src={imageURL}
        alt="the product in question"
      ></img>

      <div className="product-info">
        <p className="name">{name}</p>
        <div className="price-container">
          <p className="price">${price}</p>
        </div>
      </div>
    </button>
  );
}
