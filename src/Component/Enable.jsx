import React,{useState} from 'react'
import './Show.css'

export default function Enable() {
    const [main , setMain]= useState(true)
    const [diffClass , setDiffClass]=useState('btn')
    

    const handleClick =()=>{
     setMain(!main)
     if (main) {
        setDiffClass('disableBtn');
      } else {
        setDiffClass('btn');
      }
    }

  return (
    <div>
      <h1>Enable/Disable button</h1>
       <button className={diffClass} disabled={main}>Main Button</button> 
       <button  onClick={handleClick} className='space btn'>
       {main ? "Disable" : "Enable"}  
      </button>
    </div>
  )
}
