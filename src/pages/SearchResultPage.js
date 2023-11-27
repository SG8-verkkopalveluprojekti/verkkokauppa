import React from "react";

export const SearchResultPage = ({ products }) => {
    console.log( products);
  return (
    <div>
      <section className="search-results">
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.productName}</h3>
            <p>Hinta: {product.price}€</p>
          </div>
        ))}
      </section>
    </div>
  );
};