import React from 'react';

import  {
  update,
  start,
  stop,
  reset,
  tick,
  selectStarted,
  selectElapsed,
  selectIsTiming
} from './TimerSlice';
import './Timer.css';

export function Timer() {
  const startedAt = selectStarted();
  const elapsed = selectElapsed();
  const isTiming = selectIsTiming();
  console.log('elapsed',elapsed);
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
        {elapsed}
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
