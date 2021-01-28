import { createSlice } from '@reduxjs/toolkit';

export const numberSlice = createSlice({
  name: 'number',
  initialState: {
    currentVal: 0
  },
  reducers: {
    add(state, action) {
      state.currentVal += action.payload;
    },
    sub(state, action) {
      state.currentVal -= action.payload;
    },
    mul(state, action) {
      state.currentVal *= action.payload;
    },
    div(state, action) {
      state.currentVal /= action.payload;
    },
  },
});

export const { add, sub, mul, div } = numberSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCurrentVal = state => state.currentVal;

export default numberSlice.reducer;
