import { createSlice } from '@reduxjs/toolkit';

export const breakLabelSlice = createSlice({
  name: 'breakLabel',
  initialState: 5,
  reducers: {
    incrementBreak: state => {
      return sanitizeState(state, true);
    },
    decrementBreak: state => {
      return sanitizeState(state, false);
    }
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
  decrementBreak
 } = breakLabelSlice.actions;

export const selectBreakLabel = state => state.breakLabel;

export default breakLabelSlice.reducer;
