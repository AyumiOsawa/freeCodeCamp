import React from 'react';
import './Control.css';

export function Control() {
  return (
    <div className="column__side">
      <div className="key key__control" id="clear">AC</div>
      <div className="key key__control" id="add">+</div>
      <div className="key key__control" id="subtract">-</div>
      <div className="key key__control" id="multiply">x</div>
      <div className="key key__control" id="divide">/</div>
      <div className="key key__control" id="decimal">.</div>
      <div className="key key__control key__equal" id="equal">=</div>
    </div>
  );
}
