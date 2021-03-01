import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectSessionLabel,
  incrementSession,
  decrementSession
} from './SessionLabelSlice';
import './SessionLabel.css';

export function SessionLabel() {
  const dispatch = useDispatch();

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
          onClick={() => dispatch(decrementSession())}
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
          onClick={() => dispatch(incrementSession())}
        >
        ↑
        </div>
      </div>
    </div>
  )
}
