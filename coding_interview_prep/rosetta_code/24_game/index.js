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
  let inputArr = numStr.split('');
  inputArr = inputArr.map(numStr => parseInt(numStr, 10));

  // =============================================================
  // STEP 1:  PERMUTATION. Take an array and return the permunatation.
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

  // Take an input number array and return a collection of all possible
  // calculation orders.
  // e.g.) generateCalcOrder([2, 4, 6, 3]) returns [[0, 1, 2], [0, 2, 1],
  // [1, 0, 2], [1, 2, 0]...], where
  // [1, 2, 0] means 2 - ((4 - 6) - 3)
  // [2, 1, 0] means 2 - (4 - (6 - 3)), and so on.
  const generateCalcOrder = (inputArr) => {
    const numOfCalcs = inputArr.length - 1;
    let calcOrders = [];
    for (let i = 0; i < numOfCalcs; i ++) {
      calcOrders.push(i);
    }
    return generateArrayPermutation(calcOrders);
  };


  // =====================================================
  // STEP 2: GENERATE FORMULA. Take ONE array of numbers and generate formulas
  // (numbers and operators) with all combination of operands.
  const operands = ['+', '-', '*', '/'];

  const generateFormula = (inputArr) => {
    let formulaCollection = [];
    const addOperandAndNumber = (numToAddToFormula, inputFormula) => {
      if (numToAddToFormula.length === 0) {
        formulaCollection.push(inputFormula);
        return;
      }
      const currentNumToAddToFormula = [...numToAddToFormula];
      if (inputFormula.length === 0) {
        const firstNumber = currentNumToAddToFormula.shift();
        inputFormula.push(firstNumber);
      }
      let currentFormula;
      const numberAfterOperand  = currentNumToAddToFormula.shift();
      operands.forEach(operand => {
          currentFormula = inputFormula.concat([operand, numberAfterOperand]);
          return addOperandAndNumber(currentNumToAddToFormula, currentFormula);
      });
      return inputFormula;
    };
    addOperandAndNumber(inputArr, []);
    return formulaCollection;
  }


  // =====================================================
  // STEP 3: CALCULATE.
  // Take ONE formula and calculate it in every possible calculation order.
  const calculateFormula = (formulaArr, calcOrders) => {
    // Calculate one pair of numbers.
    const calculateOnePair = (num1, num2, operandStr) => {
      let result;
      switch (operandStr) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
        default:
          break;
      }
      return result;
    };

    // Calculate an entire formula.
    let workingFormulaArr = [];
    for (let calcOrdersIndex = 0;
         calcOrdersIndex < calcOrders.length;
         calcOrdersIndex++) {
        console.log('calculate', formulaArr, 'in the order of', calcOrders[calcOrdersIndex]);
      currentFormulaArr = [...formulaArr];
      calcOrders[calcOrdersIndex].forEach((operatingPair, index) => {
        // calcPair is either bigger one of (operatingPair - index) or 0,
        // because currentFormulaArr gets shortened at the end of this forEach
        // loop.
        // e.g.) In case calcOrder = [0, 2, 1]:
        // 1st loop: currentFormulaArr = [1, '+', 2, '+', 3, '+', 4];
        // 2nd loop: currentFormulaArr = [3, '+', 3, '+', 4];
        // 3rd loop: currentFormulaArr = [3, '+', 7];
        // 4th loop: currentFormulaArr = [10];
        let calcPair = Math.max(operatingPair - index, 0);
        let num1 = currentFormulaArr[calcPair * 2];
        let num2 = currentFormulaArr[calcPair * 2 + 2];
        let operand = currentFormulaArr[calcPair * 2 + 1];
        let newNum = calculateOnePair(num1, num2, operand);
        currentFormulaArr.splice(calcPair * 2, 3, newNum);
      })
      if (currentFormulaArr.length === 1 && currentFormulaArr[0] === 24) {
        console.log('found');
        return calcOrders[calcOrdersIndex];
      }
    }
    // when this formula doesn't return 24 in ANY calculation orders
    return false;
  };


  // =====================================================
  // STEP 4: PUT TOGETHER.
  // Generate ALL formulas, and calculate it in ALL calculation orders. Return
  // the pair of the formula and the order that makes 24.
  const calcAllNumInAllOrder = () => {
    const permNumbers = generateArrayPermutation(inputArr);
    const permCalcOrders = generateCalcOrder(inputArr);
    // For each permuted numbers, generate formulas.
    let calcOrderToMake24 = false;
    for (let permNumsIndex = 0;
         permNumsIndex < permNumbers.length;
         permNumsIndex++) {
      const formulas = generateFormula(permNumbers[permNumsIndex]);
      for (let formulasIndex = 0;
           formulasIndex < formulas.length;
           formulasIndex++) {
        calcOrderToMake24 = calculateFormula(formulas[formulasIndex], permCalcOrders);
        if (calcOrderToMake24) {
          return [formulas[formulasIndex], calcOrderToMake24];
        }
      }
    }
    // when no formula yields 24 in any orders
    return false;
  };


  // =====================================================
  //Step 5: MAKE ANSWER STRING. Add () in the appropriate positions based on
  // the input array.
  const constructFormulaStr = () => {
    const makes24 = calcAllNumInAllOrder();
    if (!makes24) {
      return 'no solution exists';
    }
    const [formula, order] = makes24;
    console.log(' inside const form formula',formula);
    console.log('inside const form order',order);
    if (!formula && !order) {
      return
    }

    // TODO: check the calculation order and add () to appropriate places
    const checkTheFollowingOperandPerecedence = (formula, orderIndex, orderArray) => {
      const numOfOperands = orderArray.length;
      const operands = {};
      const isOperandWeak = {};
      for (let operandIndex = 0;
           operandIndex < numOfOperands;
           operandIndex++) {
        operands[operandIndex] = formula[operandIndex * 2 + 1];
        isOperandWeak[operandIndex] = operands[operandIndex] === '+' ||
                                      operands[operandIndex] === '-';
      }
      // get the operands that are not yet calculated
      const followingOperands = [...orderArray];
      followingOperands.splice(0, orderIndex + 1);
      console.log('orderIndex',orderIndex);
      console.log('followingOperands',followingOperands);

      const isWeak = (operand) => {
        return isOperandWeak[operand];
      };

      // Check if the pair needs parenthesis.
      // For the operands that have not been calculated:
      // CASE 1: all have the same strength (weak-weak, strong-strong) as current pair's operand has
      // CASE 2: contains at least one operand that is stronger than the current one
    }

    let needParentheses = [];
    order.forEach((calcPair, calcPairIndex, calcOrder) => {
      checkTheFollowingOperandPerecedence(formula, calcPairIndex, calcOrder);
      // switch (calcPair) {
      //   case '0':
      //      // either one of, or both of operand2 and operand 3 is/are * or /
      //     if (!isOperand2Weak || !isOperand3Weak) {
      //       formula.splice(0, 0, '(');
      //       formula.splice(4, 0, ')');
      //     }
      //     break;
      //   case '1':
      //
      //     break;
      //   case '2':
      //
      //     break;
      //   default:
      //
      // }
    });

    // let formulaStr = ''
    // if (isOperand2Weak && !isOperand3Weak) {
    //   formula.splice(0, 0, '(');
    //   formula.splice(-2, 0, ')');
    // } else if (isOperand1Weak && !isOperand2Weak) {
    //   formula.splice(0, 0, '(');
    //   formula.splice(4, 0, ')');
    // }

    // return formula.reduce((accum, currentVal) => accum+currentVal);
  };

  // ===============================
  // FOR DEBUGGING
  console.log('inputArr',inputArr);
  const permInputNums = generateArrayPermutation(inputArr);
  console.log('permInputNums',permInputNums);
  const exampleFormulas = generateFormula(permInputNums[0]);
  console.log('generateFormula example',exampleFormulas);
  const permCalcOrder = generateCalcOrder(inputArr);
  console.log('permCalcOrder',permCalcOrder);
  const makes24 = calcAllNumInAllOrder();
  console.log('makes24?', makes24)
  constructFormulaStr(makes24);

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
