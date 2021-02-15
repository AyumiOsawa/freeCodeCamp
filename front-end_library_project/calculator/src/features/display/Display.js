import React from 'react';
import { useSelector } from 'react-redux';

import { selectInputs } from '../number/numberSlice';

export function Display () {
  const currentInputs = useSelector(selectInputs);
  console.log('currentInput',currentInputs)

  return (
    <div className="display" id="display">
      {
        currentInputs.length === 0 ?
        0 :
        currentInputs.join('')
      }
    </div>
  )
}
