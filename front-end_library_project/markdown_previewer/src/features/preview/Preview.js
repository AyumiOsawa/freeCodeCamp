import React from 'react';
import { useSelector } from 'react-redux';
import { selectInput } from '../input/inputSlice';
import './Preview.css';

export default function Preview() {
  const input = useSelector(selectInput);

  return (
    <div
      className="preview__box">
      <div
        className="preview__display"
      >
      {input}
      </div>
    </div>
  );
}
