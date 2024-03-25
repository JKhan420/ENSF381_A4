// ProductItem.js
import React, { useState } from 'react';

const ProductItem = ({ product, addToCart }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  return (
    <div className="product-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={product.image} alt={product.name} style={{ width: '200px', height: '200px' }} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      {showDescription && <p>{product.description}</p>}
    </div>
  );
};

export default ProductItem;
