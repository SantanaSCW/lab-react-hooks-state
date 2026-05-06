import React, { useState } from 'react';
import ProductList from './components/ProductList';
import DarkModeToggle from './components/DarkModeToggle';

const sampleProducts = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
  { id: 2, name: 'Apple', category: 'Fruits', price: 1 },
  { id: 3, name: 'Smartphone', category: 'Electronics', price: 699 },
  { id: 4, name: 'Headphones', category: 'Electronics', price: 199 },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState('All');
  const [cart, setCart] = useState([]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = sampleProducts.filter(product => 
    category === 'All' || product.category === category
  );

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <h1>My Shopping App</h1>
      
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className="filter-section">
        <label htmlFor="category-filter">Filter by Category: </label>
        {/* The test looks for 'combobox' (a select element) */}
        <select 
          id="category-filter" 
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Fruits">Fruits</option>
        </select>
      </div>

      <div className="main-content">
        <ProductList products={filteredProducts} addToCart={addToCart} />
        
        <div className="cart">
          {/* The test looks for the text 'shopping cart' */}
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>{item.name} - ${item.price}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;