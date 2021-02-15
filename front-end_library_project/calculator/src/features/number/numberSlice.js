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
    input: (state, action) => {
      let {inputs, isFloat} = state;
      let newInput = action.payload;
      const lastInput = inputs[inputs.length - 1];
      const secondLastInput = inputs[inputs.length - 2];
      let newStateInputs = [action.payload]
      let newStateIsFloat = isFloat;
      // A decimal point can be added only once to one number
      if (/\./.test(newInput) && isFloat) {
        newStateInputs = [];
      } else if (/\./.test(newInput) && !isFloat) {
        newStateIsFloat = true;
      }
      // Float number input mode is reset when a new operand is given
      if(/[\+\-\*\=\/]/.test(newInput)) {
        newStateIsFloat = false;
      }
      // Add 0 to the front if the first input was a decimal point
      if(/\./.test(newInput) &&
         inputs.length === 0) {
        newStateInputs = ['0', '.'];
      }
      // Minus can follow zero or one operand except the decimal point
      const doesDecimalPointPrecede = /[\.]/.test(lastInput);
      const areTheLast2InputsOperands = /[\.\+\-\*\=\/]/.test(lastInput) &&
                                        /[\.\+\-\*\=\/]/.test(secondLastInput);
      const shouldRejectMinusInput = areTheLast2InputsOperands ||
                                     doesDecimalPointPrecede;
      if(/\-/.test(newInput) && shouldRejectMinusInput) {
        newStateInputs = [];
      }
      // Replace the latest input with the new input, if multiple operands were
      // given in a row.
      // Replace the second latest input with the new input and delete the last
      // input, if the second lastest input is also an operand.
      const isTheLastInputOperand = /[\.\+\-\*\=\/]/.test(lastInput);
      if (/[\.\+\*\=\/]/.test(newInput) && areTheLast2InputsOperands) {
        inputs[inputs.length - 2] = newInput;
        inputs.pop();
        newStateInputs = [];
      } else if(/[\.\+\*\=\/]/.test(newInput) && isTheLastInputOperand) {
        inputs[inputs.length - 1] = newInput;
        newStateInputs = [];
      }

      state.isFloat = newStateIsFloat;
      console.log('final isFloat',isFloat);
      if (newStateInputs.length !== 0) {
        newStateInputs.forEach(newInput => {
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
