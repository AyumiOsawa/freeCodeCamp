import { createSlice } from '@reduxjs/toolkit';

const initialStateSession = 25;

export const sessionLabelSlice = createSlice({
  name: 'sessionLabel',
  initialState: initialStateSession,
  reducers: {
    incrementSession: state => {
      return sanitizeState(state, true);
    },
    decrementSession: state => {
      return sanitizeState(state, false);
    },
    resetSession: state => initialStateSession
  },
});

const sanitizeState = (prevState, isAdding) => {
  const calculatedState = isAdding ? prevState += 1 : prevState -= 1
  let newState;
  if (calculatedState <= 0) {
    newState = 1;
  } else if (calculatedState > 60) {
    newState = 60;
  } else {
    newState = calculatedState;
  }
  return newState;
};

export const {
  incrementSession,
  decrementSession,
  resetSession
} = sessionLabelSlice.actions;

export const selectSessionLabel = state => state.sessionLabel;

export default sessionLabelSlice.reducer;
