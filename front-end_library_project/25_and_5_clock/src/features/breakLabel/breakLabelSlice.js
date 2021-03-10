import { createSlice } from '@reduxjs/toolkit';

const initialStateBreak = 5;

export const breakLabelSlice = createSlice({
  name: 'breakLabel',
  initialState: initialStateBreak,
  reducers: {
    incrementBreak: state => {
      return sanitizeState(state, true);
    },
    decrementBreak: state => {
      return sanitizeState(state, false);
    },
    resetBreak: state => initialStateBreak

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
  incrementBreak,
  decrementBreak,
  resetBreak
 } = breakLabelSlice.actions;

export const selectBreakLabel = state => state.breakLabel;

export default breakLabelSlice.reducer;
