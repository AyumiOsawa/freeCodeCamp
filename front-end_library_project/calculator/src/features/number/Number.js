import React from 'react';
import './Number.css';

export function Number() {
  return (
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
      <div className="key key__number key__zero" id="zero">0</div>
    </div>
  );
}
