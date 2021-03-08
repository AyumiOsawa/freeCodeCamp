import { createSlice } from '@reduxjs/toolkit';

export const sessionLabelSlice = createSlice({
  name: 'sessionLabel',
  initialState: 25,
  reducers: {
    incrementSession: state => state += 1,
    decrementSession: state => {
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
  incrementSession,
  decrementSession
} = sessionLabelSlice.actions;

export const selectSessionLabel = state => state.sessionLabel;

export default sessionLabelSlice.reducer;
