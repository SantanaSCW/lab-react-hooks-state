import React, { useState } from 'react';
import ProductList from './components/ProductList';
import DarkModeToggle from './components/DarkModeToggle';
import Cart from './components/Cart';

function App() {
  // 1. State Management
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  // 2. Add to Cart Logic
  const addToCart = (product) => {
    // Spreading the existing cart and adding the new product object
    setCart([...cart, product]);
  };

  return (
    /* The className toggles based on state to fulfill the CSS challenge */
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      
      {/* 
         IMPORTANT: We pass 'isDarkMode' to the 'darkMode' prop 
         to match the variable names in your DarkModeToggle component.
      */}
      <DarkModeToggle 
        darkMode={isDarkMode} 
        setDarkMode={setIsDarkMode} 
      />
      
      <div className="filter-container">
        <label htmlFor="category-select">Filter by Category: </label>
        <select 
          id="category-select"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
        </select>
      </div>

      {/* Pass category and addToCart function down to ProductList */}
      <ProductList category={category} addToCart={addToCart} />
      
      {/* Pass the cart array to the Cart component */}
      <Cart items={cart} />
    </div>
  );
}

export default App;