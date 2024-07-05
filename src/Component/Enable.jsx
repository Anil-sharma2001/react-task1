import React,{useState} from 'react'
import './Show.css'

export default function Enable() {
    const [main , setMain]= useState(false)
    const [diffClass , setDiffClass]=useState('btn')
    const [click,setClick]=useState(true)
    

    const handleClick =()=>{
     setMain(!main)
     if (main) {
        setDiffClass('btn');
      } else {
        setDiffClass('disableBtn');
      }
    }
    const workClick=()=>{
     setClick(!click)

    } 
    
     
  return (
    <div>
       <button className={diffClass} disabled={main} onClick={workClick}>Main Button</button> 
       <button  onClick={handleClick} className='space btn'>
       {main ? "Enable" : "Disable"}  
      </button>
      {!click && <h3>Buttton is working</h3>}
    </div>
  )
}
