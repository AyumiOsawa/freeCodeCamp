import React from 'react';
import { useSelector } from 'react-redux';
import { selectInput } from '../input/inputSlice';
import './Preview.css';
const marked = require("marked");
let preview;

document.addEventListener('DOMContentLoaded', () => {
  preview = document.getElementById('preview');
})

export default function Preview() {
  const input = useSelector(selectInput);
  const html = marked(input);

  return (
    <div
      className="preview__box">
      <div
        id="preview"
        className="preview__display"
      >
      {html}
      </div>
    </div>
  );
}
