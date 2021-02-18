import React, { useEffect, useState } from 'react';
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
    text: 'AC',
    keyName: [
      'Backspace'
    ]
  },
  {
    id: 'add',
    text: '+',
    keyName: [
      'ShiftRight',
      'ShiftLeft',
      'Smicolon'
    ]
  },
  {
    id: 'subtract',
    text: '-',
    keyName: [
      'Minus'
    ]
  },
  {
    id: 'multiply',
    text: '*',
    keyName: [
      'ShiftRight',
      'ShiftLeft',
      'Quote'
    ]
  },
  {
    id: 'divide',
    text: '/',
    keyName: [
      'Slash'
    ]
  },
  {
    id: 'decimal',
    text: '.',
    keyName: [
      'Period'
    ]
  },
  {
    id: 'equal',
    text: '=',
    keyName: [
      'ShiftRight',
      'ShiftLeft',
      'Minus'
    ]
  }
];

export function Control() {
  const dispatch = useDispatch();
  const [ pressed, setPressed ] = useState({});

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

  useEffect(() => {
      // TODO: add addEventListener for keyup
  }, []);

  useEffect(() => {
    console.log('state update:', pressed);
    const keys = Object.keys(pressed)

    //TODO: handle each input accordingly after the state update

  }, [pressed]);

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
    // TODO: check if all the keys are correctly detected.
    console.log('event.code',event.code);
    // switch (event.code) {
    //   case 'ShiftRight':
    //   case 'ShiftLeft':
    //   case 'Semicolon':
    //   case 'Quote':
    //   case 'Minus':
    //   case 'Slash':
    //   case 'Period':
    //     setPressed({ [event.code]: true });
    //     break;
    //   default:
    //     break;
    //
    const isTargetKeyPressed = controlKeys.some(targetKey => {
      return targetKey.keyName.includes(event.code);
    });
    console.log('isTargetKeyPressed',isTargetKeyPressed);
    if (isTargetKeyPressed) {
      console.log('target key pressed');
      setPressed({ [event.code]: true });
    }
  };

  const handleControlKeyUp = (event) => {
    // TODO: add logic to update the keys
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
