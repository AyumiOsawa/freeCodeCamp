import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectBreakLabel,
  incrementBreak,
  decrementBreak
} from './BreakLabelSlice';
import './BreakLabel.css';

export function BreakLabel() {
  const dispatch = useDispatch();

  const breakLabel = useSelector(selectBreakLabel);

  return (
    <div
      className="break-container"
    >
      <div
        id="break-label"
        className="break-label"
      >
      Break Length
      </div>
      <div
        className="break-control"
      >
        <div
          id="break-decrement"
          className="break-decrement"
          onClick={() => dispatch(decrementBreak())}
        >
        ↓
        </div>
        <div
          id="break-length"
          className="break-length"
        >
          {breakLabel}
        </div>
        <div
          id="break-increment"
          className="break-increment"
          onClick={() => dispatch(incrementBreak())}
        >
        ↑
        </div>
      </div>
    </div>

  )
}
