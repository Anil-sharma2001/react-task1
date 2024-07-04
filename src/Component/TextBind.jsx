import React, { useState } from 'react';
import './Show.css'

export default function TextBind() {
  const [value, setValue] = useState('');
  const [arr , setArr] =useState([0])

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div >
      <input
        type='text'
        value={value}
        onChange={handleChange}
        className="textbind-input"
        placeholder="Type something..."
      />
      <div className="textbind-output">
        {value || 'Start typing to see the input value here'}
      </div>
    </div>
  );
}
