import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { ... } from './quoteSlice';
import './Quote.css';

export function Quote() {


  return (
    <>
      <div id="text">
        Here's a text
      </div>
      <div id="author">
        and the authors
      </div>
    </>

  );
};
