import { useState } from 'react';




function DarkModeToggle({darkMode, setDarkMode}){
    

    return (

            <button onClick ={() => setDarkMode(!darkMode)}>
                {darkMode ? 'light mode':'dark mode'}
            </button>

    
    )




}

export default DarkModeToggle;