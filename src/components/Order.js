import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { jwtToken } from './signals/TokenSignal';

export const Order = ({ cart, onSubmitOrder }) => {
  const token = jwtToken;

  const makeOrder = async () => {
    console.log('Token:', token);

    if (cart.length === 0) {
      alert('Ostoskori on tyhjä! Lisää tuotteita ostoskoriin ennen tilauksen tekemistä.');
      return;
    }

    if (!token) {
      alert('Kirjaudu sisään tehdäksesi tilauksen!');
      return;
    }

    try {
      // Make the order request with the Authorization header
      const response = await axios.post('http://localhost:3001/submit-order', { products: cart }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Notify the parent component about the order submission
      onSubmitOrder();

      // Log the response from the server
      console.log('Order submission response:', response.data);
    } catch (error) {
      console.error('Error making order:', error);
    }
  };

  return (
    <div>
      <Button
        className="btn btn-primary btn-md"
        style={{ width: '100%' }}
        variant="primary"
        onClick={makeOrder}
      >
        Tilaa tästä
      </Button>
    </div>
  );
};