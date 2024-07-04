import React,{useState} from 'react'
import './Sum.css'

export default function Sum() {
    const [firstValue,setFirstValue]=useState('')
    const [secondValue,setSecondValue]=useState('')
    const [total,setTotal]=useState(0)
   
   const handleFIrst=(e)=>{

    const newValue = parseInt(e.target.value)
   setFirstValue(newValue)
   }
   const handleSecond=(e)=>{
    const newValue2 = parseInt(e.target.value)
    setSecondValue(newValue2)
    }
    const handleClick=()=>{
        const valuee = firstValue+secondValue
        setTotal(valuee)
        setFirstValue('')
        setSecondValue('')
    }
 
  return (
    <div>
      <input className="input" type='number' placeholder='Add a number' value={firstValue} required onChange={handleFIrst}></input>
      <input className="input" type='number' placeholder='Add a number value'value={secondValue} onChange={handleSecond}  required></input>
      <button className="button" onClick={handleClick}>Add value</button>
      <p className="result">{total}</p>
    </div>
  )
}
