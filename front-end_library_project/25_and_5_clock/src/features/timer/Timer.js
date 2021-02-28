import React from 'react';
import { useSelector } from 'react-redux';

import  {
  update,
  start,
  stop,
  reset,
  tick,
  selectStartedAt,
  selectElapsed,
  selectIsTiming
} from './TimerSlice';
import './Timer.css';

export function Timer() {
  const startedAt = useSelector(selectStartedAt);
  const elapsed = useSelector(selectElapsed);
  const isTiming = useSelector(selectIsTiming);
  console.log('startedAt',startedAt);
  console.log('elapsed',elapsed);
  console.log('isTiming',isTiming);
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
