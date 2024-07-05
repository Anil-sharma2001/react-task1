import React, { useState } from 'react';
import './Show.css';

export default function Show() {
  const [clickme, setClickme] = useState(false);

  const handleButton = () => {
    setClickme(!clickme);
  };

  return (
    <div className="self-sizing-container">
      <h1 className="title">Show Hide element on screen</h1>
      <div>
        {!clickme && <h1 className="show-element">Showing</h1>}
      </div>
      <button className='btn' onClick={handleButton}>
        {clickme ? 'Show' : 'Hide'}
      </button>
    </div>
  );
}
