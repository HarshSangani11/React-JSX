
import React, { useState, useRef } from 'react';

export default function List() {
    const inputRef = useRef();
    const [items, setItems] = useState([]);

    const handleClick = () => {
        const newItem = inputRef.current.value;
        if (newItem !== "") {
            setItems([...items, newItem]);
        }
        inputRef.current.value = '';
        setTimeout(() => {
          inputRef.current.focus();
        }, 1000);
    };

    return (
        <div>
            <h1>To-Do List </h1>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Add Item</button>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
