import React from 'react';
import { Control } from './features/control/Control';
import { Number } from './features/number/Number';
import { Display } from './features/display/Display';
import './App.css';

function App() {
  return (
    <div className="App">
      <Display />
      <div className='key__container'>
        <Number />
        <Control />
      </div>
    </div>
  );
}

export default App;
