import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  actions,
  selectInput
} from '../input/inputSlice';

import './Input.css';

export default function Input() {
  const input = useSelector(selectInput);
  const dispatch = useDispatch();
  const onSetInput = (text) => {
    dispatch(actions.update(text))
  };

  return(
    <div
      className="input__box"
    >
      <textarea
        id="editor"
        className="input__textarea"
        rows="20"
        autoFocus="autofocus"
        wrap="hard"
        value={input}
        onChange={event => onSetInput(event.target.value)}
      >
      </textarea>
    </div>
  );
}
