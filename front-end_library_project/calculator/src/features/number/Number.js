import React from 'react';
import './Number.css';

export function Number() {
  return (
    <div className="colmn__numbers">
      <div className="key key_wrapper__number">
        <div className="key__number" id="nine">9</div>
      </div>
      <div className="key key_wrapper__number">
        <div className="key__number" id="eight">8</div>
      </div>
      <div className="key key_wrapper__number">
        <div className="key__number" id="seven">7</div>
      </div>
      <div className="key key_wrapper__number">
        <div className="key__number" id="six">6</div>
      </div>
      <div className="key key_wrapper__number">
        <div className="key__number" id="five">5</div>
      </div>
      <div className="key key_wrapper__number">
        <div className="key__number" id="four">4</div>
      </div>
      <div className="key key_wrapper__number">
        <div className="key__number" id="three">3</div>
      </div>
      <div className="key key_wrapper__number">
        <div className="key__number" id="two">2</div>
      </div>
      <div className="key key_wrapper__number">
        <div className="key__number" id="one">1</div>
      </div>
      <div className="key key_wrapper__number key__zero">
        <div className="key__number" id="zero">0</div>
      </div>
    </div>
  );

}
