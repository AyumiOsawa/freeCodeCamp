// <div> start_stop__svg icon made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// <div> reset__svg icon made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import  {
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
  const dispatch = useDispatch();

  const startedAt = useSelector(selectStartedAt);
  const elapsed = useSelector(selectElapsed);
  const isTiming = useSelector(selectIsTiming);
  const sessionLabel = useSelector(selectSessionLabel);
  console.log('isTiming',isTiming);

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
          onClick={() => {
            isTiming ? dispatch(stop())
            : dispatch(start());
            // TODO: tick func debug
            // tick();
          }}
        >
        <svg
          className="start_stop__svg"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
        	width="45.974px"
          height="45.975px"
          viewBox="0 0 45.974 45.975"
          style={{enableBackgroundNew: '0 0 45.974 45.975'}}
        	xmlSpace="preserve"
        >
        <g>
        	<g>
        		<g>
        			<path
                d="M9.629,44.68c-1.154,1.16-2.895,1.51-4.407,0.885c-1.513-0.623-2.5-2.1-2.5-3.735V4.043c0-1.637,0.987-3.112,2.5-3.736c1.513-0.625,3.253-0.275,4.407,0.885l17.862,17.951c2.088,2.098,2.088,5.488,0,7.585L9.629,44.68z"
              />
        		</g>
        		<g>
        			<g>
        				<path
                  d="M38.252,45.975c-2.763,0-5-2.238-5-5V5c0-2.762,2.237-5,5-5c2.762,0,5,2.238,5,5v35.975C43.252,43.736,41.013,45.975,38.252,45.975z"
                />
        			</g>
        		</g>
        	</g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        </svg>
        </div>
        <div
          id="reset"
          className="reset"
          onClick={() => dispatch(reset())}
        >
          <svg
            className="reset__svg"
            id="Capa_1"
            enableBackground="new 0 0 497.883 497.883"
            height="10vh"
            viewBox="0 0 497.883 497.883"
            width="10vh"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m435.647 155.588-62.235 93.353h31.118c0 85.786-69.802 155.588-155.588 155.588-52.788 0-99.368-26.561-127.511-66.883l-36.282 54.424c39.959 45.668 98.487 74.694 163.793 74.694 120.11 0 217.823-97.714 217.823-217.823h31.118z"
            />
            <path
              d="m93.353 248.941c0-85.786 69.802-155.588 155.588-155.588 52.788 0 99.368 26.561 127.511 66.883l36.282-54.423c-39.959-45.668-98.487-74.694-163.793-74.694-120.11 0-217.823 97.714-217.823 217.823h-31.118l62.235 93.353 62.235-93.353z"
              />
          </svg>
        </div>
      </div>
    </div>
  )
}
