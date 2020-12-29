import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quotes } from '../../constants';
import './Quote.css';

const selectId = state => state.id;

export function Quote(props) {
  const id_raw = useSelector(selectId);
  const id = id_raw % quotes.length;

  return (
    <>
      <div id="text">
        {quotes[id].text}
      </div>
      <div id="author">
        {quotes[id].author}
      </div>
    </>

  );
};
