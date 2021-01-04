import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectInput } from '../input/inputSlice';
import './Preview.css';
const marked = require("marked");

export default function Preview() {
  let parentElm;
  let input = useSelector(selectInput);

  const updateHTML = () => {
    const html = marked(input);
    parentElm.innerHTML = html;
  }

  useEffect(() => {
      parentElm = document.getElementById('preview');
  },[]);

  useEffect(() => {
    updateHTML();
  }, input);

  return (
    <div
      className="preview__box">
      <div
        id="preview"
        className="preview__display"
      >
      </div>
    </div>
  );
}
