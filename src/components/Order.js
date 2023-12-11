import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { jwtToken, updateToken } from './signals/TokenSignal';

export const Order = ({ cart, onSubmitOrder }) => {
  const token = jwtToken;

  const makeOrder = async () => {
    try {
      // Make the order request with the Authorization header
      await axios.post('http://localhost:3001/submit-order', { cart }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Notify the parent component about the order submission
      onSubmitOrder();
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