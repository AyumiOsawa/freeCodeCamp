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
import {
  selectSessionLabel
} from '../sessionLabel/SessionLabelSlice';
import './Timer.css';

export function Timer() {
  const startedAt = useSelector(selectStartedAt);
  const elapsed = useSelector(selectElapsed);
  const isTiming = useSelector(selectIsTiming);
  const sessionLabel = useSelector(selectSessionLabel);

  const remainingTime = sessionLabel - elapsed;
  console.log('sessionL - elap', remainingTime);
  return (
    <div
      className="timer"
    >
      <div
        id="timer-label"
        className="timer_label"
      >
      {
        isTiming ? 'Session' : 'Break'
      }
      </div>
      <div
        id="time-left"
        className="time_left"
      >
        {
          elapsed === 0 ?
          remainingTime.toString() +':00' :
          remainingTime
        }
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
