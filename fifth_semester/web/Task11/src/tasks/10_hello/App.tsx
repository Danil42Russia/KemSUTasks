import React, { useState, useRef } from 'react';

import './styles.css';

function App() {
  const [name, setName] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const buttonClick = () => {
    setName(inputRef?.current?.value ?? '');
  };

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input type="text" ref={inputRef} placeholder="What's your name?" />
      <button onClick={buttonClick}>Submit</button>
    </div>
  );
}

export default App;
