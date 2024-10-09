import React, { useState } from 'react'
import './hook.css'
export default function Hook() {
    const [count,setCount]=useState(0);

const increment=()=>{
    setCount(count+1)
}
const decrement=()=>{
    setCount(count-1)
}
const reset=()=>{
    setCount(0)
}
  return (
    <div className='main'>
        <h1>{count}</h1>
    <button onClick={increment}>+</button>
    <button onClick={reset}>reset</button>
    <button onClick={decrement}>-</button>
    </div>
  )
}

