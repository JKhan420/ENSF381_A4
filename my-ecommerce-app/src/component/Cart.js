// Cart.js
import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart" style={{ float: 'right', width: '30%' }}>
      <h2>Shopping Cart</h2>
      {cart.map((item, index) => (
        <CartItem key={index} item={item} removeFromCart={removeFromCart} />
      ))}
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
};

export default Cart;
