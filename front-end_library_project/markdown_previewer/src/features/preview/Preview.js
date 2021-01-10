import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectInput } from '../input/inputSlice';
import store from '../../app/store';
import './Preview.css';
const marked = require("marked");

export default function Preview() {
  let input = useSelector(selectInput);
  const [ loaded, setLoaded ] = useState(false);
  let unsubscribe;
  let parentElm;
  const mountHTML = (parent) => {
    const input_str = store.getState();
    parent.innerHTML = marked(input_str);
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    parentElm = document.getElementById('preview');
    mountHTML(parentElm);
    unsubscribe = store.subscribe(() => mountHTML(parentElm));
  },[loaded]);

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
