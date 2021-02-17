import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  inputActionCreator,
  clearActionCreator,
  calculateActionCreator
} from '../number/numberSlice';
import './Control.css';

const controlKeys = [
  {
    id: 'clear',
    text: 'AC'
  },
  {
    id: 'add',
    text: '+'
  },
  {
    id: 'subtract',
    text: '-'
  },
  {
    id: 'multiply',
    text: '*'
  },
  {
    id: 'divide',
    text: '/'
  },
  {
    id: 'decimal',
    text: '.'
  },
  {
    id: 'equal',
    text: '='
  }
];

export function Control() {
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener('keydown', event => {
      handleControlKeyDown(event);
    })
    return (() => {
      document.removeEventListener('keydown', event => {
        handleControlKeyDown(event);
      })
    });
  }, []);

  const handleClickOperand = (event) => {
    const keyInput = event.target.outerText;
    dispatch(inputActionCreator(keyInput));
  };

  const handleClickClear = (event) => {
    dispatch(clearActionCreator());
  };

  const handleClickEqual = (event) => {
    dispatch(calculateActionCreator());
  };

  const handleControlKeyDown = (event) => {
    // TODO: Add logic to handle multiple keydown inputs.
    // handle each input accordingly.
    console.log('event.code',event.code);
    switch (event.code) {
      case '':

        break;
      case '+':

        break;
      case '+':

        break;
      case '+':

        break;
      case '+':

        break;
      case '+':

        break;
      default:
        break;
    }
  };

  controlKeys.forEach(key => {
    switch (key.id) {
      case 'equal':
        key.onClick = handleClickEqual;
        break;
      case 'clear':
        key.onClick = handleClickClear;
        break;
      default:
        key.onClick = handleClickOperand;
        break;
    }
  });

  return (
    <div className="column__side">
      {
        controlKeys.map(key => {
          return (
              key.id === "equal" ?
              (
                <div
                  className="key key_wrapper__control"
                  key={key.id}
                  onClick={(event) => key.onClick(event)}
                >
                 <div className="key__control" id={key.id}>
                  {key.text}
                 </div>
                </div>
              ) : (
                <div
                  className="key key_wrapper__control"
                  key={key.id}
                  onClick={(event) => key.onClick(event)}
                >
                 <div className="key__control key__equal" id={key.id}>
                  {key.text}
                 </div>
                </div>
              )
         );
        })
      }
    </div>
  );
}
