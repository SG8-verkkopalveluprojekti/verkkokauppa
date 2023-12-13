import React, { useEffect, useState } from 'react';
import { Order } from '../components/Order';
import { useLocation } from 'react-router-dom';
import './Cart.css';

export const Cart = () => {
  const [shoppingCart, setShoppingCart] = useState(
    JSON.parse(localStorage.getItem('shopping-cart')) || []
  );
  const [totalPrice, setTotalPrice] = useState(0);
  const params = useLocation();

  const updateCount = (item, n) => {
    setShoppingCart((prevCart) => {
      const updatedCart = prevCart.map((element) =>
        element.id === item.id
          ? { ...element, count: Math.max(0, element.count + n) }
          : element
      );
  
      // Remove item if count is 0
      return updatedCart.filter((element) => element.count > 0);
    });
  };

 

  useEffect(() => {
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

    const newTotalPrice = shoppingCart.reduce(
      (acc, item) => acc + item.count * item.price,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [shoppingCart]);

  useEffect(() => {
    if (params.state && params.state.product !== null) {
      let item = params.state.product;
      addItemToCart(item);
    }
  }, [params.state]);

  const addItemToCart = (item) => {
    setShoppingCart((prevCart) => {
      const isPresent = prevCart.some((element) => element.id === item.id);

      if (isPresent) {
        return prevCart.map((element) =>
          element.id === item.id
            ? { ...element, count: element.count + 1 }
            : element
        );
      } else {
        const newItem = { ...item, count: 1 };
        return [...prevCart, newItem];
      }
    });
  };

  const removeItemFromCart = (item) => {
    let updatedCart = [...shoppingCart];
    updatedCart = updatedCart.filter((element) => element.id !== item.id);

    if (updatedCart.length === 0) {
      setShoppingCart([]);
    } else {
      setShoppingCart(updatedCart);
    }
  };

    const handleOrderSubmit = () => {
    // Define the logic for handling the order submission here
    // For example, you can display a confirmation message or redirect the user
    console.log('Order submitted successfully!');
  };


  return (
    <div className="cart-container">
      <h3>Shopping Cart</h3>
      <article>
        {shoppingCart.length > 0 ? (
          shoppingCart.map((item) => (
            <div className='cart_box' key={item.id}>
              <div className='cart_img'>
                <img src={item.imageUrl} alt='' />
                <div className='details'>
                  <p>{item.productName}</p>
                </div>
              </div>
              <div>
                <button onClick={() => updateCount(item, -1)}>-</button>
                <button>{item.count}</button>
                <button onClick={() => updateCount(item, 1)}>+</button>
              </div>
              <div>
                <span>{(item.price * item.count).toFixed(2)}€</span>
                <button onClick={() => removeItemFromCart(item)}>Remove</button>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h2>Cart is empty</h2>
          </div>
        )}
      </article>
          
      {/* Display total price */}
      <div className='total-price'>
        Hinta Yhteensä: {totalPrice.toFixed(2)}€
        <Order cart={shoppingCart} onSubmitOrder={handleOrderSubmit} />
      </div>
    </div>
  );
};

export default Cart;