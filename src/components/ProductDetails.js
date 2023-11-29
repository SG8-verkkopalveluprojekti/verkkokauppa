import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div>
      <p>{product.description}</p>
      <p>Price: {product.price}€</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductDetails;