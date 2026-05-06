function ProductList({ category, addToCart }) {
  // Assuming 'products' is your array of grocery items
  const filteredProducts = products.filter(product => 
    category === "All" || product.category === category
  );

  return (
    <div className="product-list">
      {filteredProducts.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          addToCart={addToCart} 
        />
      ))}
    </div>
  );
}