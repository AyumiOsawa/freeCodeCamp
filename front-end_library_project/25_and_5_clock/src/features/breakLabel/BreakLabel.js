import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectrBreakLabel
} from './BreakLabelSlice';
import './BreakLabel.css';

export function BreakLabel() {
  const breakLabel = useSelector(selectrBreakLabel);

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
        >
        ↑
        </div>
      </div>
    </div>

  )
}
