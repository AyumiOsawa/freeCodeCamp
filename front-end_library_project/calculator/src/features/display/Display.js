import React from 'react';
import { useSelector } from 'react-redux';

import { selectInput } from '../number/numberSlice';

export function Display () {
  const currentInput = useSelector(selectInput);
  console.log('currentInput',currentInput)

  return (
    <div className="display" id="display">
      {
        currentInput.length === 0 ?
        0 :
        currentInput.join('')
      }
    </div>
  )
}
