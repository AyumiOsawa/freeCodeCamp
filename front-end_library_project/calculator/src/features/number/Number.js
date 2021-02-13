import React from 'react';
import { useDispatch } from 'react-redux';

import { inputActionCreator } from './numberSlice';
import './Number.css';


export function Number() {
  const keyNumberNames = [
                          'zero',
                          'one',
                          'two',
                          'three',
                          'four',
                          'five',
                          'six',
                          'seven',
                          'eight',
                          'nine'
                          ];
  const reversedKeyNumNames = keyNumberNames.reverse();
  const dispatch = useDispatch();

  const handleClick = (event) => {
    const keyInput = event.target.outerText;
    // console.log('even', event.target.outerText);
    // console.log(`${event} clicked`);
    // console.log('type of input', typeof input
    console.log('inputActionCreator', inputActionCreator);
    // dispatch(inputActionCreator(keyInput));
  };

  return (
    <div className="colmn__numbers">
      {reversedKeyNumNames.map((numberName, index) => {
        return (
          numberName === 'zero' ?
          (
            <div
              className="key key_wrapper__number key__zero"
              key={9 - index}
            >
              <div
                className="key__number"
                id={numberName}
                onClick={(event) => handleClick(event)}
              >
                {9 - index}
              </div>
            </div>
          ) : (
            <div
              className="key key_wrapper__number"
              key={9 - index}
            >
              <div
                className="key__number"
                id={numberName}
                onClick={(event) => handleClick(event)}
              >
                {9 - index}
              </div>
            </div>
          )
        );
      })}
    </div>
  );

}
