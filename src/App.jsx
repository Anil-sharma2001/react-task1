import { Children, useState } from 'react'
import './App.css'
import Show from './Component/Show'
import Enable from './Component/Enable'
import TextBind from './Component/TextBind'
import Child from './Component/Child'
import Sum from './Component/Sum'
import Counter from './Component/Counter'
import Search from './Component/Search'

function App() {
  const [record , setRecord]= useState(['Anil','Sachin','Jatin','Ritik'])
  const [count , setCount]=useState(1)
  const [arr,setArr]=useState([])

  const handleClick =()=>{
     setCount(count+1)
   setArr([...arr,count])  
  }
 
  
  return (
    <>
    <div>
      <h3>Display Simple JSX</h3>
      <div className='self-sizing-container'>
      <h1>Display an array of record on screen</h1>
      <ul>
        {record.map((e,i)=>(<li key={i}>{e}</li>))}
      </ul>
      </div>
      <div className='self-sizing-container'>
      <Show/>
      </div>
      <div className='self-sizing-container'>
      <h1>Enable/Disable button</h1>
      <Enable/>
      </div>
      <div className='self-sizing-container'>
        <h1>2 way data binding using textbox</h1>
      <TextBind/>
      </div>
      <div className='self-sizing-container'> 
        <h1>Dynamically add Child component</h1>     
       <button className='btn' onClick={handleClick} >CLick me</button>
       {arr.map((e,i)=>(<Child key={i} text={e}/>))}
      </div>
      <div className='self-sizing-container'>
      <h1>Do sum of two number</h1>
      <Sum/>
      </div>
      </div>
      <div className='self-sizing-container'>
      <h1>Create a Counter</h1>
        <Counter/>
      </div>
      <div className='self-sizing-container' >
       <Search/>
      </div>
    </>
  )
}

export default App
