import React from 'react';

import './Timer.css';

export function Timer() {

  return (
    <div
      className="timer"
    >
      <div
        id="timer-label"
        className="timer_label"
      >
      Session or Break
      </div>
      <div
        id="time-left"
        className="time_left"
      >
        mm:ss
      </div>
      <div
        className="controls"
      >
        <div
          id="start_stop"
          className="start_stop"
        >
          Start/Stop
        </div>
        <div
          id="reset"
          className="reset"
        >
          Reset
        </div>
      </div>
    </div>
  )
}
