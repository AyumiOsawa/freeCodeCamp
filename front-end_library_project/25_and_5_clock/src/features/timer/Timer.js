// <div> start_stop__svg icon made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// <div> reset__svg icon made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import  {
  update,
  start,
  stop,
  reset,
  switchMode,
  selectStartedAt,
  selectElapsed,
  selectIsTiming,
  selectIsSession
} from './TimerSlice';
import {
  selectSessionLabel,
  resetSession
} from '../sessionLabel/SessionLabelSlice';
import {
  selectBreakLabel,
  resetBreak
} from '../breakLabel/BreakLabelSlice';
import './Timer.css';

export function Timer() {
  const dispatch = useDispatch();

  const startedAt = useSelector(selectStartedAt);
  const elapsed = useSelector(selectElapsed);
  const isTiming = useSelector(selectIsTiming);
  const isSession = useSelector(selectIsSession);
  const sessionLabel = useSelector(selectSessionLabel);
  const breakLabel = useSelector(selectBreakLabel);

  let timerId = useRef(null);
  let audio = useRef(null);

  useEffect(() => {
    audio.current = document.getElementById('beep');
  }, [])

  useEffect(() => {
    handleSoundPlayback(/* shouldPlay = */true);
  }, [isSession])

  const handleSoundPlayback = (shouldPlay) => {
    const audioPlayPromies = audio.current.play();
    if (audioPlayPromies !== undefined) {
      audioPlayPromies.then(_ => {
        if (!shouldPlay) {
          audio.current.pause();
          audio.current.currentTime = 0;
        }
      })
      .catch(error => {
        console.log('audio error', error);
      })
    }
  }
  const handleStartStop = () => {
    if (isTiming) {
      dispatch(stop());
      clearInterval(timerId.current);
    } else {
      dispatch(start());
      clearInterval(timerId.current);
      timerId.current = setInterval(() => {
        dispatch(update());
      }, 100);
    }
  };

  const handleReset = () => {
    clearInterval(timerId.current);
    dispatch(reset());
    dispatch(resetBreak());
    dispatch(resetSession());
    if (isTiming) {
      dispatch(stop());
    }
    if (!isSession) {
      dispatch(switchMode());
    }
    handleSoundPlayback(/* shouldPlay = */false);
  }

  const calculateRemainingTime = (setMin, elapsed) => {
    const setSec = setMin * 60;
    const remainingTotalSec = setSec - elapsed;
    if (remainingTotalSec < 0) {
      dispatch(reset());
      dispatch(switchMode());
    }
    const remainingSec = (remainingTotalSec % 60);
    const remainingSec_str = remainingSec.toString();
    const remainingMin_str = (Math.round((remainingTotalSec - remainingSec) / 60)).toString();
    return remainingMin_str.padStart(2, '0') + ':' + remainingSec_str.padStart(2, '0');
  };

  return (
    <div
      className="timer"
    >
      <div
        id="timer-label"
        className="timer_label"
      >
      {
        isSession ? 'Session' : 'Break'
      }
      </div>
      <div
        id="time-left"
        className="time_left"
      >
        {
          isSession ?
          calculateRemainingTime(sessionLabel, elapsed) :
          calculateRemainingTime(breakLabel, elapsed)
        }
      </div>
      <div
        className="controls"
      >
        <div
          id="start_stop"
          className="start_stop"
          onClick={() => handleStartStop()}
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
          onClick={() => handleReset()}
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
      <audio
        id="beep"
        preload="auto"
        volume="0.1"
      >
        <source
          src="https://a.pomf.cat/maiyvy.wav"
          type="audio/mpeg"
        />
      </audio>
    </div>
  )
}
