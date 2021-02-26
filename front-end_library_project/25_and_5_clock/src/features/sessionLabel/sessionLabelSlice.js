import { createSlice } from '@reduxjs/toolkit';

export const sessionLabelSlice = createSlice({
  name: 'sessionLabel',
  initialState: 25,
  reducers: {
    incrementSession: state => {
      state += 1;
    },
    decrementSession: state => {
      state -= 1;
    }
  },
});

export const {
  incrementSession,
  decrementSession
} = sessionLabelSlice.actions;

// export const selectSessionLabel = state => state;

export default sessionLabelSlice.reducer;
