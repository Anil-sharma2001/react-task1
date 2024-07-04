import React, { useState } from 'react'
import "./Sum.css"

export default function Counter() {
  const [count , setCount]=useState(0)

   const handleIncrement =()=>{
    setCount(count+1)
   }
   const handleDecrement=()=>{
    setCount(count-1)
   }

  return (
    <div>
      <p className='counterResult'>{count}</p>
      <button className='button' onClick={handleIncrement}>Increment</button>
      <button className='button' onClick={handleDecrement}>Decrement</button>
    </div>
  )
}
