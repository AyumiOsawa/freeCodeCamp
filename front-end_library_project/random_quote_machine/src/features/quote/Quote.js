import React from 'react';
import { useSelector } from 'react-redux';
import { quotes } from '../../constants';
import './Quote.css';

const selectId = state => state.id;

export function Quote(props) {
  const id_raw = useSelector(selectId);
  // adjusting the id for negative numbers
  // ref: https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
  const id = ((id_raw % quotes.length) + quotes.length) % quotes.length;

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
