import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Cart.css';

export const Cart = () => {
  const [shoppingCart, setShoppingCart] = useState(
    JSON.parse(localStorage.getItem('shopping-cart')) || []
  );
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

    // Calculate total price whenever the cart is updated
    const newTotalPrice = shoppingCart.reduce(
      (acc, item) => acc + item.count * item.price,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [shoppingCart]);

  const params = useLocation();

  const updateCount = (item, n) => {
    setShoppingCart((prevCart) =>
      prevCart.map((element) =>
        element.id === item.id
          ? { ...element, count: Math.max(0, element.count + n) }
          : element
      )
    );
  };

  const addItemToCart = (item) => {
    let isPresent = false;
    shoppingCart.forEach((element) => {
      if (element.id === item.id) isPresent = true;
    });

    if (isPresent) {
      // updateCount(item,1);
    } else {
      const newItem = { ...item, count: 1 };
      const updatedCart = [...shoppingCart, newItem];
      setShoppingCart(updatedCart);
    }
  };

  if (params.state && params.state.product !== null) {
    let item = params.state.product;
    addItemToCart(item);
  }

  const removeItemFromCart = (item) => {
    let updatedCart = shoppingCart;
    setShoppingCart(updatedCart.filter((element) => element.id !== item.id));
  };

  return (
    <>
      <h3>Shopping Cart</h3>
      <article>
        {shoppingCart.length > 0 ? (
          shoppingCart.map((item) => (
            <div className='cart_box' key={item.id}>
              <div className='cart_img'>
                <img src={item.imageUrl} alt='' />
                <div className='details'>
                  <p>{item.productName}</p>
                  {/* <p>{item.description}</p> */}
                </div>
              </div>
              <div>
                <button onClick={() => updateCount(item, 1)}>+</button>
                <button>{item.count}</button>
                <button onClick={() => updateCount(item, -1)}>-</button>
              </div>
              <div>
                <span>{item.price * item.count}€</span>
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
      <div>Hinta Yhteensä: {totalPrice}€</div>
    </>
  );
};

export default Cart;