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
      'Semicolon'
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
      'Minus',
      'Enter'
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
    document.addEventListener('keyup', event => {
      handleControlKeyUp(event);
    })
    return (() => {
      document.removeEventListener('keydown', event => {
        handleControlKeyUp(event);
      })
    });
  }, []);

  useEffect(() => {
    const isShiftPressed = pressed.ShiftRight || pressed.ShiftLeft;
    const isClearPressed = pressed.Backspace;
    const isEqualPressesd = (pressed.Minus && isShiftPressed) ||
                             pressed.Enter;
    let operands = [
      {
        operand: '+',
        isPressed: pressed.Semicolon && isShiftPressed
      },
      {
        operand: '-',
        isPressed: pressed.Minus && !isShiftPressed
      },
      {
        operand: '*',
        isPressed: pressed.Quote && isShiftPressed
      },
      {
        operand: '/',
        isPressed: pressed.Slash
      },
      {
        operand: '.',
        isPressed: pressed.Period
      }
    ];
    const isOperandPressed = operands.some(operand => operand.isPressed);

    if (isClearPressed) {
      dispatch(clearActionCreator());
    } else if (isEqualPressesd) {
      dispatch(calculateActionCreator());
    } else if (isOperandPressed) {
      let pressedOperand = operands.filter(operand => operand.isPressed);
      pressedOperand = pressedOperand[0] ?? false;
      if (pressedOperand) {
        dispatch(inputActionCreator(pressedOperand.operand));
      }
    }

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
    const isTargetKeyPressed = controlKeys.some(targetKey => {
      return targetKey.keyName.includes(event.code);
    });
    console.log('pressed key:',event.code);
    if (isTargetKeyPressed) {
      setPressed(prevState => {
        return {
          ...prevState ,
          [event.code]: true
        };
      });
    }
  };

  const handleControlKeyUp = (event) => {
    const isTargetKeyUp = controlKeys.some(targetKey => {
      return targetKey.keyName.includes(event.code);
    });
    if (isTargetKeyUp) {
      setPressed(prevState => {
        return {
          ...prevState,
          [event.code]: false
        };
      });
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
