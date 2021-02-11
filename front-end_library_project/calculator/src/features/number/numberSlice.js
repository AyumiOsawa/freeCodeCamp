import { createSlice } from '@reduxjs/toolkit';

// 2 states: calculation input
const calculateFormula = (formula) => {


};

const calculationSlice = createSlice({
  name: 'calculation',
  initialState,
  reducers: {
    calculate: (state, action) => {
      state = calculateFormula(action.payload);
    },
    clear: (state, action) => {
      state = initialState;
    }
  }
});

const inputSlice = createSlice({
  name: 'input',
  initialState: [],
  reducers: (state, action) => {
    state.push(action.payload)
  }
})

const floatInputSlice = createSlice({
  name: 'floatInput',
  initialState: false,
  reducers: (state, action) => {
    state = !state
  }
})

// export const { add, sub, mul, div } = calculationSlice.actions;

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
