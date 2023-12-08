import React from 'react';
import { useCurrency } from './CurrencyContext';

const ProductDetails = ({ product }) => {
  const { selectedCurrency } = useCurrency();

  const formatPrice = (price) => {
    if (selectedCurrency === 'usd') {
      return product.price_usd + '$' || 'No price';
    } else if (selectedCurrency === 'eur') {
      return product.price + '€' || 'No price';
    }
    return 'No price';
  };

  return (
    <div>
      <p>{product.description}</p>
      <p>Price: {formatPrice(product.price)}</p>      
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductDetails;