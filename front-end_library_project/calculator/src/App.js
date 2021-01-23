import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="display" id="display">0</div>
      <div class='key__container'>
        <div className="colmn__numbers">
          <div className="key key__number" id="nine">9</div>
          <div className="key key__number" id="eight">8</div>
          <div className="key key__number" id="seven">7</div>
          <div className="key key__number" id="six">6</div>
          <div className="key key__number" id="five">5</div>
          <div className="key key__number" id="four">4</div>
          <div className="key key__number" id="three">3</div>
          <div className="key key__number" id="two">2</div>
          <div className="key key__number" id="one">1</div>
          <div className="key key__number" id="zero">0</div>
        </div>
        <div className="column__side">
          <div className="key key__control" id="equal">=</div>
          <div className="key key__control" id="add">+</div>
          <div className="key key__control" id="subtract">-</div>
          <div className="key key__control" id="multiply">X</div>
          <div className="key key__control" id="divide">/</div>
          <div className="key key__control" id="decimal">.</div>
          <div className="key key__control" id="clear">AC</div>
        </div>
      </div>
    </div>
  );
}

export default App;
