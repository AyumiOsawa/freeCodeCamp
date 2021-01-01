import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Input.css';

export default function Input() {


  return(
    <div
      className="input__box"
    >
      <textarea
        className="input__textarea"
        rows="20"
        autoFocus="autofocus"
        placeholder="Try typing ### Title"
      >
      </textarea>
    </div>
  );
}
