import { useState } from 'react';




function DarkModeToggle(){
    const [toggle, setToggle] = useState(false)

    


    return (
        <div style={{
            backgroundColor : toggle ? 'white' : 'black'
        }}>
            <button onClick ={() => setToggle(!toggle)}>
                {toggle ? 'light mode':'dark mode'}
            </button>

        </div>
    )




}

export default DarkModeToggle;