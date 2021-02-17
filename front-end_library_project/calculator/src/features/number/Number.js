import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { inputActionCreator } from './numberSlice';
import './Number.css';

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

export function Number() {
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener('keydown', event => {
      handleNumberKeyDown(event);
    });
    return (() => {
      document.removeEventListener('keydown', event => {
        handleNumberKeyDown(event);
      });
    });
  }, []);


  const handleNumberKeyDown = (event) => {
    if (/Digit/.test(event.code)) {
      const keyInput = event.code.slice(-1);
      console.log('keyInput',keyInput);
      dispatch(inputActionCreator(keyInput));
    }
  };

  const handleClick = (event) => {
    const keyInput = event.target.outerText;
    dispatch(inputActionCreator(keyInput));
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
