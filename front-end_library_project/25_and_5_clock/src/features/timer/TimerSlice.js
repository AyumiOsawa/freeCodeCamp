import { createSlice } from '@reduxjs/toolkit';

const t = Date.now();
const zeroSecElapsed = t - t;

const initialState = {
  started: null,
  elapsed: zeroSecElapsed,
  isTiming: true
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    update: state => {
      state.elapsed = Date.now() - state.started;
    },
    start: state => {
      state.isTiming = true;
      state.started = Date.now();
    },
    stop: state => {
      state.isTiming = false;
      state.started = null;
    },
    reset: state => {
      state.elapsed = zeroSecElapsed;

    }
  },
});

export const {
  update,
  start,
  stop,
  reset
 } = timerSlice.actions;

export const tick = () => dispatch => {
  setTimeout(() => {
    dispatch(update());
  }, 1000);
};

export const selectTimestamp = state => state.timer.timestamp;
export const selectElapsed = state => state.timer.elapsed;
export const selectIsTiming = state => state.timer.isTiming;

export default timerSlice.reducer;
