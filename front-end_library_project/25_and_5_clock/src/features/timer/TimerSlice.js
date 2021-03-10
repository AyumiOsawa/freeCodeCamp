import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  startedAt: null,
  elapsed: 0,
  isTiming: false,
  isSession: true
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    update: state => {
      state.elapsed += 1;
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
      state.elapsed = 0;
      state.isSession = true;
    },
    switchMode: state => {
      state.isSession = !state.isSession;
    }
  },
});

export const {
  update,
  start,
  stop,
  reset,
  switchMode
 } = timerSlice.actions;

export const selectIsSession = state => state.timer.isSession;
export const selectStartedAt = state => state.timer.startedAt;
export const selectElapsed = state => state.timer.elapsed;
export const selectIsTiming = state => state.timer.isTiming;

export default timerSlice.reducer;
