// ProductList.js
import React, { useState, useEffect } from 'react';
import Product from './Product';

const ProductList = ({ onAddToCart }) => {
  // State to store the fetched products
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch products from the backend
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/products'); 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  // useEffect to trigger the fetch when the component is mounted
  useEffect(() => {
    fetchProducts();
  }, []);

  // Render loading, error, or the product list based on the state
  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error}</div>;
  } else {
    return (
      <div className="product-list">
        {products.map(product => (
          <Product key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    );
  }
};

export default ProductList;
