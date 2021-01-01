import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectInput } from '../input/inputSlice';

import './Input.css';

export default function Input() {
  const input = useSelector(selectInput);

  return(
    <div
      className="input__box"
    >
      <textarea
        className="input__textarea"
        rows="20"
        autoFocus="autofocus"
      >
      {input}
      </textarea>
    </div>
  );
}
