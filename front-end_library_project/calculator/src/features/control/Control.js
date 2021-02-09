import React from 'react';
import './Control.css';

export function Control() {
  return (
    <div className="column__side">
      <div className="key key_wrapper__control">
        <div className="key__control" id="clear">AC</div>
      </div>
      <div className="key key_wrapper__control">
        <div className="key__control" id="add">+</div>
      </div>
      <div className="key key_wrapper__control">
        <div className="key__control" id="subtract">-</div>
      </div>
      <div className="key key_wrapper__control">
        <div className="key__control" id="multiply">x</div>
      </div>
      <div className="key key_wrapper__control">
        <div className="key__control" id="divide">/</div>
      </div>
      <div className="key key_wrapper__control">
        <div className="key__control" id="decimal">.</div>
      </div>
      <div className="key key_wrapper__control">
        <div className="key__control key__equal" id="equal">=</div>
      </div>
    </div>
  );
}
