import { createSlice } from '@reduxjs/toolkit';

export const breakLabelSlice = createSlice({
  name: 'breakLabel',
  initialState: 5,
  reducers: {
    incrementBreak: state => state += 1,
    decrementBreak: state => {
      const newState = state - 1;
      state = Math.max(newState, 0);
      return state;
    }
  },
});

export const {
  incrementBreak,
  decrementBreak
 } = breakLabelSlice.actions;

export const selectrBreakLabel = state => state.breakLabel;

export default breakLabelSlice.reducer;
