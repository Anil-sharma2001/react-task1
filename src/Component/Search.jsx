import React, { useState } from 'react'
import './Search.css'

export default function Search() {
     const [arr, setArr]= useState(['Apple','Banana',' Orange','Strawberry','Grape','Mango','Pineapple','Blueberry','Raspberry','Watermelon'])
     const [search , setSearch]=useState('')

     const handleChange=(e)=>{
      setSearch(e.target.value)
      console.log(search)
     }
    
    return (
    <div>
      <input className='input' type='text' placeholder='Search here' onChange={handleChange} required></input>
      <ul>
        { arr.filter((fruit)=> fruit.toLowerCase().includes(search.toLowerCase())).map((e,i)=>(
            <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  )
}
