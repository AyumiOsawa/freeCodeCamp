import React from 'react';

import './Timer.css';

export function Timer() {

  return (
    <div
      className="timer"
    >
      <div
        id="timer-label"
      >
      Session or Break
      </div>
      <div
        id="time-left"
      >
        mm:ss
      </div>
      <div>
        <div
          id="start_stop"
        >
          Start/Stop
        </div>
        <div
          id="reset"
        >
          Reset
        </div>
      </div>
    </div>
  )
}
