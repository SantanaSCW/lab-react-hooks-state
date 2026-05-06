import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import DarkModeToggle from './components/DarkModeToggle';

const App = () => {
  // 1. State for Dark Mode
  const [darkMode, setDarkMode] = useState(false);

  // 2. State for Cart
  const [cart, setCart] = useState([]);

  // 3. Mock Data for Products
  const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Smartphone', price: 699 },
    { id: 3, name: 'Headphones', price: 199 },
  ];

  // 4. Helper function to toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // 5. Helper function to add items to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    // Apply a CSS class based on darkMode state
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <h1>My Shopping App</h1>
      
      {/* Pass the toggle function as a prop */}
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="main-content">
        {/* Pass products and the addToCart function as props */}
        <ProductList products={products} addToCart={addToCart} />
        
        {/* Pass the cart state as a prop */}
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default App;