import { createSlice } from '@reduxjs/toolkit';

const t = Date.now();
const zeroSecElapsed = t - t;

const initialState = {
  startedAt: null,
  elapsed: zeroSecElapsed,
  isTiming: false
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
      console.log('clock reset!');
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


export const selectStartedAt = state => state.timer.startedAt;
export const selectElapsed = state => state.timer.elapsed;
export const selectIsTiming = state => state.timer.isTiming;

export default timerSlice.reducer;
