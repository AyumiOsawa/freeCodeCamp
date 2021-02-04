// 24 GAME
//
// The 24 Game tests a person's mental arithmetic.
//
// The aim of the game is to arrange four numbers in a way that when evaluated,
// the result is 24
//
// Implement a function that takes a string of four digits as its argument,
// with each digit from 1 to 9 (inclusive) with repetitions allowed, and
// returns an arithmetic expression that evaluates to the number 24. If no such
// solution exists, return "no solution exists".
//
// Rules:
// - Only the following operators/functions are allowed: multiplication,
//   division, addition, subtraction.
// - Division should use floating point or rational arithmetic, etc, to
//   preserve remainders.
// - Forming multiple digit numbers from the supplied digits is disallowed. (So
//   an answer of 12+12 when given 1, 2, 2, and 1 is wrong).
// - The order of the digits when given does not have to be preserved.
//
// Example input;	Example output
// solve24("4878");	(7-8/8)*4
// solve24("1234");	3*1*4*2
// solve24("6789");	(6*8)/(9-7)
// solve24("1127");	(1+7)*(2+1)
//
// https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/24-game

function solve24 (numStr) {
  const inputArr = numStr.split('');

  // Take the array of possible numbers to add one accumulator array, and
  // generate all permunations of the numbers in the array
  const generateArrayPermutation = (remainingNum) => {
    let permutations = [];
    const permutate = (remainingNum, arrayToAddTo = []) => {
      if (remainingNum.length === 0) {
        permutations.push(arrayToAddTo);
        return;
      }

      let updatedArrays = [];
      for (let i = 0; i < remainingNum.length; i++) {
        let updatedArray = [...arrayToAddTo];
        updatedArray.push(remainingNum[i]);
        let updatedRemainings = [...remainingNum];
        updatedRemainings.splice(i, 1);
        let newArr = {
                        remaining : updatedRemainings,
                        array     : updatedArray
                     };
        updatedArrays.push(newArr);

      }

      updatedArrays.forEach(arrObj => {
        return permutate(arrObj.remaining, arrObj.array);
      });
    };

    permutate(remainingNum);
    return permutations;
  };

  const permInputNums = generateArrayPermutation(inputArr);

  console.log('input num perm', permInputNums);

  // using the generateArrayPermutation, generate the order of the calculation
  const numOfCalcs = inputArr.length - 1;
  let calcArr = [];
  for (let i = 0; i < numOfCalcs; i ++) {
    calcArr.push(i);
  }
  const permCalcOrder = generateArrayPermutation(calcArr);
  console.log('permCalcOrder',permCalcOrder);


  // =====================================================
  // Take an array of numbers and array of formula (numbers and operators).
  // Output all combination of operands and their results in an array.
  const operands = ['+', '-', '*', '/'];
  let sumAndFormula = [];
  const calculateTwoNumbers = (numArray, formula) => {
    if (numArray.length === 1) {
      sumAndFormula.push({
                          sum     : numArray[0],
                          formula : formula
                        });
      return;
    }
    let updatedNumArray = [];
    let updatedFormula = [];
    operands.forEach(operand => {
      updatedNumArray = [...numArray];
      const num1 = updatedNumArray[0];
      const num2 = updatedNumArray[1];
      updatedNumArray.splice(0,2);
      let newElm;

      switch (operand) {
        case '+':
          newElm = parseInt(num1) + parseInt(num2);
          updatedNumArray.unshift(newElm);
          updatedFormula = formula.length === 0 ?
                           formula.concat([num1.toString(), '+', num2.toString()]) :
                           formula.concat(['+', num2.toString()]);
          break;
        case '*':
          newElm = parseInt(num1) * parseInt(num2);
          updatedNumArray.unshift(newElm);
          updatedFormula = formula.length === 0 ?
                           formula.concat([num1.toString(), '*', num2.toString()]) :
                           formula.concat(['*', num2.toString()]);
          break;
        case '-':
          newElm = parseInt(num1) - parseInt(num2);
          updatedNumArray.unshift(newElm);
          updatedFormula = formula.length === 0 ?
                           formula.concat([num1.toString(), '-', num2.toString()]) :
                           formula.concat(['-', num2.toString()]);
          break;
        case '/':
          newElm = parseInt(num1) / parseInt(num2);
          updatedNumArray.unshift(newElm);
          updatedFormula = formula.length === 0 ?
                           formula.concat([num1.toString(), '/', num2.toString()]) :
                           formula.concat(['/', num2.toString()]);
          break;
        default:
          break;
      }

        return calculateTwoNumbers(updatedNumArray, updatedFormula);
    });
  };


  // =====================================================
  // Add () in the appropriate positions based on the input array.
  const constructFormulaStr = (calculationResultObj) => {
    const {sum, formula} = calculationResultObj;
    let formulaStr = '';
    const operand1 = formula[1];
    const operand2 = formula[3];
    const operand3 = formula[5];
    const isOperand1Weak = operand1 === '+' || operand1 === '-';
    const isOperand2Weak = operand2 === '+' || operand2 === '-';
    const isOperand3Weak = operand3 === '+' || operand3 === '-';

    if (isOperand2Weak && !isOperand3Weak) {
      formula.splice(0, 0, '(');
      formula.splice(-2, 0, ')');
    } else if (isOperand1Weak && !isOperand2Weak) {
      formula.splice(0, 0, '(');
      formula.splice(4, 0, ')');
    }

    return formula.reduce((accum, currentVal) => accum+currentVal);
  };

  let formulaStr;
  for (let i = 0; i < permInputNums.length; i++) {
    sumAndFormula = [];
    calculateTwoNumbers(permInputNums[i], []);
    const resultObj24 = sumAndFormula.find(calculationResultObj => {
      return calculationResultObj.sum === 24;
    });

    if (resultObj24) {
      formulaStr = constructFormulaStr(resultObj24);
      break;
    };
  }

  return typeof formulaStr === 'undefined' ?
         'no solution exists' :
         formulaStr;
};

console.log(solve24('6789'));

// module.exports = solve24;
//
//
// memo:
// - use 3 operators to apply to 4 positive numbers
//
// - look up backtracking
// - write a function that permutate the 4 input numbers.
// - write a function that permutate binary tree for 4 leaf nodes?
// - write a function that calculate all the possible combination of oprands on one fixed order of numbers.
// - write a function that generate an answer.
