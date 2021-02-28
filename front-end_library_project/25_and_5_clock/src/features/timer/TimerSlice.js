import { createSlice } from '@reduxjs/toolkit';

const t = Date.now();
const zeroSecElapsed = t - t;

const initialState = {
  startedAt: null,
  elapsed: zeroSecElapsed,
  isTiming: true
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    update: state => {
      state.elapsed = Date.now() - state.startedAt;
    },
    start: state => {
      state.isTiming = true;
      state.startedAt = Date.now();
    },
    stop: state => {
      state.isTiming = false;
      state.startedAt = null;
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

// TODO: fix the selector. state is undefined.
// export const selectStarted = state => state.started;
export const selectStartedAt = state => {
  console.log('state',state);
  return state.timer.startedAt;
};

export const selectElapsed = state => state.timer.elapsed;
export const selectIsTiming = state => state.timer.isTiming;

export default timerSlice.reducer;
