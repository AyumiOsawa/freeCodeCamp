import { createSlice } from '@reduxjs/toolkit';

export const breakLabelSlice = createSlice({
  name: 'breakLabel',
  initialState: 5,
  reducers: {
    incrementBreak: state => state += 1,
    decrementBreak: state => {
      const newState = state - 1;
      if (newState <= 0) {
        // state = 1;
        state = 0; //DEBUG
      } else if (newState > 60) {
        state = 60;
      } else {
        state = newState;
      }
      return state;
    }
  },
});

export const {
  incrementBreak,
  decrementBreak
 } = breakLabelSlice.actions;

export const selectBreakLabel = state => state.breakLabel;

export default breakLabelSlice.reducer;
