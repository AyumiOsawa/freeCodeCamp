import React from 'react';
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

  const handleClick = (event) => {
    console.log('clicked');
  }

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
                onClick={() => handleClick}
              >
                {9 - index}
              </div>
            </div>
          ) :
          (
            <div
              className="key key_wrapper__number"
              key={9 - index}
            >
              <div
                className="key__number"
                id={numberName}
                onClick={() => handleClick}
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
