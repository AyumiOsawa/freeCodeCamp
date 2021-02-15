import { createSlice } from '@reduxjs/toolkit';

// // 2 states: calculation input
// const calculateFormula = (formula) => {
//
//
// };

// const calculationSlice = createSlice({
//   name: 'calculation',
//   initialState: 0,
//   reducers: {
//     calculate: (state, action) => {
//       state = calculateFormula(action.payload);
//     }
//   }
// });

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    inputs:[],
    isFloat: false
  },
  reducers: {
    input: ({inputs, isFloat}, action) => {
      let newInputs = [action.payload];
      const lastInput = inputs[inputs.length - 1];
      const secondLastInput = inputs[inputs.length - 2];

      // A decimal point can be added only once to one number
      if (newInputs[0] === '.' && isFloat) {
        newInputs = [];
      } else if (newInputs[0] === '.' && !isFloat) {
        isFloat = true;
      }
      // Folat number input mode is reset when a new operand is given
      if(/[\+\*\=\/]/.test(newInputs[0])) {
        isFloat = false;
      }
      // Add 0 to the front if the first input was a decimal point
      if(/\./.test(newInputs[0]) &&
         inputs.length === 0) {
        newInputs = ['0', '.'];
      }
      // Replace the latest input with the new input, if multiple operands were
      // given in a row.
      // Replace the second latest input with the new input and delete the last
      // input, if the second is also an operand.
      if (/[\.\+\*\=\/]/.test(newInputs[0]) &&
          /[\.\+\-\*\=\/]/.test(lastInput)  &&
          /[\.\+\-\*\=\/]/.test(secondLastInput)) {
        inputs[inputs.length - 2] = newInputs[0];
        inputs.pop();
        newInputs = [];
      } else if(/[\.\+\*\=\/]/.test(newInputs[0]) &&
                /[\.\+\-\*\=\/]/.test(lastInput)) {
        inputs[inputs.length - 1] = newInputs[0];
        newInputs = [];
      }
      // Minus can follow zero or one operand
      if(/\-/.test(newInputs[0]) &&
         /[\.\+\-\*\=\/]/.test(lastInput) &&
         /[\.\+\-\*\=\/]/.test(secondLastInput)) {
        newInputs = [];
      }
      if (newInputs.length !== 0) {
        newInputs.forEach(newInput => {
          inputs.push(newInput)
        });
      }


    },
    clear: (state, action) => {
      return {
        ...state,
        inputs: []
      };
    }
  }
})

// const floatInputSlice = createSlice({
//   name: 'floatInput',
//   initialState: false,
//   reducers: {
//     floatInput: (state, action) => {
//     state = !state
//   }}
// })

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
export const selectInputs = state => state.input.inputs;

// export const calculateReducer = calculationSlice.reducer;
export const inputReducer = inputSlice.reducer;
// export const floatInputReeducer = floatInputSlice.reducer;

// export const {
//   calculate: calculateActionCreator
// } = calculationSlice.actions;

export const {
  input: inputActionCreator,
  clear: clearActionCreator
} = inputSlice.actions;
console.log('slice, inp', inputSlice);
// export const floatActionCreator = floatInputSlice.actions.floatInput;
