// Productpage.js
import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import productsData from '../data/products';
import Footer from './Footer';

const Productpage = () => {
  const [cart, setCart] = useState([]);

  // Load cart items from local storage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    console.log('Loaded cart from local storage:', savedCart);
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  // Save cart items to local storage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Saved cart to local storage:', cart);
  }, [cart]);

  // Function to add item to cart
  const addToCart = (product) => {
    // Check if product is already in cart
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Function to remove item from cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart.filter((item) => item.quantity > 0));
  };

  console.log('Current cart state:', cart);

  return (
    <div className="product-page">
      <Header />
      <table>
        <tr>
          <td><ProductList products={productsData} addToCart={addToCart} /></td>
          <td style={{verticalAlign:'top'}}><Cart cart={cart} removeFromCart={removeFromCart} /></td>
        </tr>
      </table>
      <Footer />
    </div>
  );
};

export default Productpage;
