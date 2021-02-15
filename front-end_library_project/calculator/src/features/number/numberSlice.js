import { createSlice } from '@reduxjs/toolkit';

const findOperandIndex = (inputsStr) => {
  const operandIndexExceptMinus = inputsStr.search(/[\+\*\/]/);
  const minusIndex = inputsStr.search(/(?<=\d+)\-/);
  let operandIndex;
  if (operandIndexExceptMinus === -1 && minusIndex === -1) {
    operandIndex = false;
  } else if (operandIndexExceptMinus === -1) {
    operandIndex = minusIndex;
  } else {
    operandIndex = operandIndexExceptMinus;
  }
  return operandIndex;
};

const calculateFormula = (state) => {
  // TODO: CALCULATE FORMULA RECURSISVELY, UNTIL NO OPERATOR FOUND.
  let {inputs} = state;
  inputs = inputs.join('');
  // get the operand and two numbers (as float)
  const operandIndex = findOperandIndex(inputs);
  let firstNum  = parseFloat(inputs.substring(0, operandIndex));
  let secondNum = parseFloat(inputs.substring(operandIndex + 1));
  const operand = operandIndex === -1 ? 'no operand given' : inputs[operandIndex];
   // perform calculation
  let calculationResult;
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
   case 'no operand given':
     calculationResult = inputs;
     break;
   default:
     calculationResult = false;
  }
   // The calculationResult is the firstNum, if the last input is an
   // non-number.
  const lastInput = inputs[inputs.length - 1];
  const isTheLastInputOperand = operandIndex === inputs.length - 1;
  const isTheLastInputDecimalPoint = /[\.]/.test(lastInput);
  if (isTheLastInputOperand || isTheLastInputDecimalPoint) {
    calculationResult = firstNum;
  }

  if (calculationResult) {
    const resultStr = calculationResult.toString();
    return {
      ...state,
      inputs: resultStr.split(''),
      isFloat: false
    };
  }
};

const sanitize = (state, action) => {
  const {inputs, isFloat} = state;
  const newInput = action.payload;
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
  const lastInput = inputs[inputs.length - 1];
  const isTheLastInputOperand = /[\+\-\*\/]/.test(lastInput);
  if (/\./.test(newInput) && isTheLastInputOperand) {
    newStateInputs = [];
    newStateIsFloat = false;
  }
  // Minus can follow zero or one operand except the decimal point
  const isTheLastInputDecimalPoint = /\./.test(lastInput);
  const secondLastInput = inputs[inputs.length - 2];
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
    // state update
    state.inputs[state.inputs.length - 2] = newInput;
    state.inputs.pop();
    newStateInputs = [];
  } else if(/[\+\*\/]/.test(newInput) && isTheLastInputOperand) {
    // state update
    state.inputs[state.inputs.length - 1] = newInput;
    newStateInputs = [];
  }
  // Operands, except minus, can not be added when the inputs array is empty
  if (/[\+\*\/]/.test(newInput) &&  inputs.length === 0) {
    newStateInputs = [];
  }
  return {newStateInputs, newStateIsFloat};
};

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    inputs:[],
    isFloat: false
  },
  reducers: {
    input: (state, action) => {
      const {newStateInputs, newStateIsFloat} = sanitize(state, action);
      // State update
      state.isFloat = newStateIsFloat;
      if (newStateInputs.length !== 0) {
        newStateInputs.forEach(newInput => {
          state.inputs.push(newInput)
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
      return calculateFormula(state);
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
