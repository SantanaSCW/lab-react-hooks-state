import React from 'react';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button onClick={toggleDarkMode}>
      Switch to {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default DarkModeToggle;