import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const firstCount = 50; // начальное число
  const [count, setCount] = useState(firstCount);
  
  return (
      <div className="App" id="App">
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count * 2)}>*2</button>
        <button onClick={() => setCount(count / 2)}>/2</button>
        <button onClick={() => setCount(count * count)}>^2</button>
        <button onClick={() => setCount(firstCount)}>обновить</button>
        <h1>Счётчик: {count}</h1>
      </div>

      
  );
}

export default App;
