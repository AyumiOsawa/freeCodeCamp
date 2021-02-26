import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  timestamp: Date.now(),
  elapsed: // TODO: set 00:00 as UTC
  isTiming: true
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    update: state => {
      const elapsed = state.timestamp - Date.now();
      const deadline =
      state.timestamp = Math.max(elapsed, );
    },
    start: state => {
      state.isTiming = true;
    },
    stop: state => {
      state.isTiming = false;
    },
    reset: state => {

    }
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(update());
  }, 1000);
};

export const selectTimestamp = state => state.timer.timestamp;
export const selectIsTiming = state => state.timer.isTiming;

export default timerSlice.reducer;
