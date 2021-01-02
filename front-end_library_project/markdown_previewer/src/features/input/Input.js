import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  inputUpdate,
  selectInput
} from '../input/inputSlice';

import './Input.css';

export default function Input() {
  const input = useSelector(selectInput);
  const dispatch = useDispatch();

  return(
    <div
      className="input__box"
    >
      <textarea
        className="input__textarea"
        rows="20"
        autoFocus="autofocus"
        wrap="hard"
        value={input}
        onChange={event => dispatch(inputUpdate(event.target.value))}
      >
      </textarea>
    </div>
  );
}
