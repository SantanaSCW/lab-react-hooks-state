import React from 'react';

// The name here MUST be ProductCard
const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      {/* Ensure this button exists for the "Add to Cart" test */}
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

// This name must match the function name above
export default ProductCard;
