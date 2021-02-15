import { createSlice } from '@reduxjs/toolkit';

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
      let newStateInputs = [action.payload];
      let newStateIsFloat = isFloat;

      // A decimal point can be added only once to one number
      if (/\./.test(newInput) && isFloat) {
        newStateInputs = [];
      } else if (/\./.test(newInput) && !isFloat) {
        newStateIsFloat = true;
      }
      // Float number input mode is reset when a new operand is given
      if(/[\+\-\*\/]/.test(newInput)) {
        newStateIsFloat = false;
      }
      // Add 0 to the front if the first input was a decimal point
      if(/\./.test(newInput) && inputs.length === 0) {
        newStateInputs = ['0', '.'];
      }
      // A decimal point cannot follow any operands
      const isTheLastInputOperand = /[\+\-\*\/]/.test(lastInput);
      if (/\./.test(newInput) && isTheLastInputOperand) {
        newStateInputs = [];
        newStateIsFloat = false;
      }
      // Minus can follow zero or one operand except the decimal point
      const isTheLastInputDecimalPoint = /\./.test(lastInput);
      const areTheLast2InputsOperands = /[\.\+\-\*\/]/.test(lastInput) &&
                                        /[\.\+\-\*\/]/.test(secondLastInput);
      const shouldRejectMinusInput = areTheLast2InputsOperands ||
                                     isTheLastInputDecimalPoint;
      if(/\-/.test(newInput) && shouldRejectMinusInput) {
        newStateInputs = [];
      }
      // Replace the latest input with the new input, if multiple operands were
      // given in a row.
      // Replace the second latest input with the new input and delete the last
      // input, if the second lastest input is also an operand.
      if (/[\+\*\/]/.test(newInput) && areTheLast2InputsOperands) {
        inputs[inputs.length - 2] = newInput;
        inputs.pop();
        newStateInputs = [];
      } else if(/[\+\*\/]/.test(newInput) && isTheLastInputOperand) {
        inputs[inputs.length - 1] = newInput;
        newStateInputs = [];
      }
      // Operands, except minus, can not be added when the inputs array is empty
      if (/[\+\*\/]/.test(newInput) &&  inputs.length === 0) {
        newStateInputs = [];
      }
      // State update
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
        inputs: [],
        isFloat: false
      };
    },
    calculate: (state, action) => {
      // Make the inputs array into string, get the index of the operand.
      // note: if there is no other operand, minus is the main operand.
      let {inputs} = state;
      inputs = inputs.join('');
      const operandIndexExceptMinus = inputs.search(/[\+\*\/]/);
      const minusIndex = inputs.search(/(?<=\d+)\-/);
      let operandIndex;
      let calculationResult;

      if (operandIndexExceptMinus === -1 && minusIndex === -1) {
        calculationResult = parseFloat(inputs);
      } else if (operandIndexExceptMinus === -1) {
        operandIndex = minusIndex;
      } else {
        operandIndex = operandIndexExceptMinus;
      }

       // find the operand and number, and parse each number
       let firstNum  = parseFloat(inputs.substring(0, operandIndex));
       let secondNum = parseFloat(inputs.substring(operandIndex + 1));
       const operand = inputs[operandIndex];

       // perform calculation
       console.log('inputs', inputs);
       console.log('operandIndex',operandIndex);
       console.log('firstNum',firstNum);
       console.log('operand',operand);
       console.log('secondNum',secondNum);
       switch (operand) {
         case '+':
           calculationResult = firstNum + secondNum;
           break;
         case '-':
           calculationResult = firstNum - secondNum;
           break;
         case '*':
           calculationResult = firstNum * secondNum;
           break;
         case '/':
           calculationResult = firstNum / secondNum;
           break;
         default:
           calculationResult = false;
       }
       // The calculationResult is the firstNum, if the last input is an non
       // number
       const lastInput = inputs[inputs.length - 1];
       const isTheLastInputOperand = operandIndex === inputs.length - 1;
       const isTheLastInputDecimalPoint = /[\.]/.test(lastInput);
       if (isTheLastInputOperand || isTheLastInputDecimalPoint) {
         calculationResult = firstNum;
       }
       // State update
       if (calculationResult) {
         return {
           ...state,
           inputs: [calculationResult.toString()],
           isFloat: false
         };
       }
    }
  }
})


export const selectInputs = state => state.input.inputs;

export const inputReducer = inputSlice.reducer;

export const {
  input: inputActionCreator,
  clear: clearActionCreator,
  calculate: calculateActionCreator
} = inputSlice.actions;
