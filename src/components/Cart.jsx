import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      {/* The test looks for "Shopping Cart" (case-insensitive) */}
      <h2>Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {/* The test specifically looks for this exact phrase format */}
              {item.name} is in your cart.
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
