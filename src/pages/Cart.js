import React, { useEffect, useState } from "react";
import { Order } from "../components/Order";
import { useLocation, useNavigate } from "react-router-dom";
import "./Cart.css";

export const Cart = () => {
  const [shoppingCart, setShoppingCart] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );
  const [totalPrice, setTotalPrice] = useState(0);
  const params = useLocation();
  const navigate = useNavigate();

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
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
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
	  localStorage.clear()
	  } else {
      setShoppingCart(updatedCart);
    }
  };

  const handleOrderSubmit = () => {
    // Alert after succesful order
    alert("Tilauksesi onnistui!");
    console.log("Order submitted successfully!");
	// Clears localstorage and sets shoppingCart state to be empty
	localStorage.clear()
    setShoppingCart([]);
	// Navigates back to homepage
	navigate('/')
  };

  return (
    <div className="cart-container">
      <h3>Ostoskori</h3>
      <article>
        {shoppingCart.length > 0 ? (
          shoppingCart.map((item) => (
            <div className="cart_box" key={item.id}>
              <div className="cart_img">
                <img src={item.imageUrl} alt="" />
                <div className="details">
                  <p>{item.productName}</p>
                </div>
              </div>
              <div className='tuotelisa'>
                <button onClick={() => updateCount(item, -1)}>-</button>
                <button>{item.count}</button>
                <button onClick={() => updateCount(item, 1)}>+</button>
              </div>
              <div>
                <span>{(item.price * item.count).toFixed(2)}€</span>
                <button style={{marginTop:"5px"}} onClick={() => removeItemFromCart(item)}>
                  Poista tuote
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h2>Ostoskorisi on tyhjä</h2>
          </div>
        )}
      </article>
        
      {/* Display total price */}
      <div>
        Hinta Yhteensä: {totalPrice.toFixed(2)}€ 
        <Order cart={shoppingCart} onSubmitOrder={handleOrderSubmit} />
      </div>
    </div>  
  );
};

export default Cart;
