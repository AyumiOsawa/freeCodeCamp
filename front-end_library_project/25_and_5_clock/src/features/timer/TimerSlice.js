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

// TODO: fix the selector. state is undefined.
// export const selectStarted = state => state.started;
export const selectStarted = state => {
  console.log('state',state);
  // state.started
};

export const selectElapsed = state => state;
export const selectIsTiming = state => state;

export default timerSlice.reducer;
