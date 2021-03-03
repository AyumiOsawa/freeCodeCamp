import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  startedAt: null,
  elapsed: 0,
  isTiming: false
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    update: state => {
      state.elapsed += 1;
      console.log('state.elapsed',state.elapsed);
    },
    start: state => {
      state.isTiming = true;
      state.startedAt = Date.now();
    },
    stop: state => {
      state.isTiming = false;
      state.startedAt = null;
      console.log('stopped!');
      console.log('stopped, current elapsed', state.elapsed);
    },
    reset: state => {
      state.elapsed = 0;
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

export const selectStartedAt = state => state.timer.startedAt;
export const selectElapsed = state => state.timer.elapsed;
export const selectIsTiming = state => state.timer.isTiming;

export default timerSlice.reducer;
