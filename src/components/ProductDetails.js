import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div>
      <h2>{product.productName}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}€</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductDetails;