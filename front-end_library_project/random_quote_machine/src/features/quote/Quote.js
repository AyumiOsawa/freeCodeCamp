import React from 'react';
import { useSelector } from 'react-redux';
import { quotes } from '../../constants';
import './Quote.css';
import { TwitterLink } from '../links/TwitterLink';
const selectId = state => state.id;

export function Quote() {
  const id_raw = useSelector(selectId);
  // adjusting the id for negative numbers
  // ref: https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
  const id = ((id_raw % quotes.length) + quotes.length) % quotes.length;

  return (
    <div
      className="quote__area"
    >
      <div className="quote__wrapper">
        <div id="text" className="quote__text">
          &quot;{quotes[id].text}&quot;
        </div>
        <div id="author" className="quote__author">
          &mdash; {quotes[id].author}
        </div>
      </div>
      <TwitterLink />
    </div>
  );
};
