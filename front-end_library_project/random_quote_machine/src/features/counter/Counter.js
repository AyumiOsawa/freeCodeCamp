import React from 'react';
import { useDispatch } from 'react-redux';
import './Counter.css';
import store from '../../app/store';

export function Counter() {
  const dispatch = useDispatch();

  return (
    <div className="counter__wrapper">
      <button
        id="btn__left"
        className="counter__button left"
        aria-label="Increment value"
        onClick={() => dispatch({type: 'prev'}) }
      >
        &lt;
      </button>
      <button
        id="btn__right"
        className="counter__button right"
        aria-label="Decrement value"
        onClick={() => dispatch({type: 'next'}) }
      >
        &gt;
      </button>
    </div>
  );
}
