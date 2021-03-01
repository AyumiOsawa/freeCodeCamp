import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectSessionLabel
} from './SessionLabelSlice';
import './SessionLabel.css';

export function SessionLabel() {
  const sessionLabel = useSelector(selectSessionLabel);

  return (
    <div
      className="session-container"
    >
      <div
        id="session-label"
        className="session-label"
      >
      Session Length
      </div>
      <div
        className="session-control"
      >
        <div
          id="session-decrement"
          className="session-decrement"
        >
        ↓
        </div>
        <div
          id="session-length"
          className="break-length"
        >
          {sessionLabel}
        </div>
        <div
          id="session-increment"
          className="session-increment"
        >
        ↑
        </div>
      </div>
    </div>
  )
}
