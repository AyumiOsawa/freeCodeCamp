import React from 'react';
import { Control } from './features/control/Control';
import { Number } from './features/number/Number';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="display" id="display">0</div>
      <div className='key__container'>
        <Number />
        <Control />
      </div>
    </div>
  );
}

export default App;
