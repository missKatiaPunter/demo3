import React, { useState } from 'react';

const Counter = () => {
    const [ counter, setCounter ] = useState(0);
    return(
        <button
            className="button"
            onClick = { () => setCounter(counter+1) }
            data-testid = 'counter-butt'
        >{ counter }
        </button>
    )
}

export default Counter;