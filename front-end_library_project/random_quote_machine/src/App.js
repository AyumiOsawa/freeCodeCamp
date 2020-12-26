import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Quote } from './features/quote/Quote';
import './App.css';

function App() {
  return (
    <div className="App" id="quote-box">
      <Quote />
      <Counter />
    </div>
  );
}

export default App;
