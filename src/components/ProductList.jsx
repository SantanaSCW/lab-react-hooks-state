import React from 'react';
import ProductCard from './ProductCard';

// CRITICAL: Ensure { products, addToCart } are inside curly braces
const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {/* 
         We use the logical && to ensure 'products' exists 
         before trying to .map() over it 
      */}
      {products && products.length > 0 ? (
        products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={addToCart} 
          />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductList;